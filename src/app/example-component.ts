import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentData } from './departmentData.model';

import { DeptService } from './dept.service';

@Component({
  selector: 'example-component',
  templateUrl: 'example-component.html',
  styleUrls: ['example-component.css'],
})
export class ExampleComponent implements OnInit {
  filterValues = {};

  displayedColumns: string[] = [
    'allAssociates',
    'dept',
    'status',
    'sun',
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'type',
  ];
  filterSelectObj = [];

  // dataSource type
  dataSource: MatTableDataSource<DepartmentData>;

  //using service
  constructor(private deptService: DeptService) {
    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'Status',
        columnProp: 'status',
        options: [],
      },
      {
        name: 'Dept',
        columnProp: 'dept',
        options: [],
      },
    ];
  }

  ngOnInit() {
    //fetch data from Service
    const deptData = this.deptService.getData();
    this.dataSource = new MatTableDataSource(deptData);

    this.dataSource.filterPredicate = this.createFilter();

    this.filterSelectObj.filter((o) => {
      o.options = this.getFilterObject(deptData, o.columnProp);
    });
  }

  filterTable(input: string) {
    this.dataSource.filterPredicate = (data: DepartmentData, f: string) =>
      !f ||
      data.allAssociates.toLowerCase().includes(f) ||
      data.dept.toLowerCase().includes(f.toLowerCase());

    input = input.trim(); // Remove whitespace
    input = input.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = input;
  }

  // Get Unique values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Called on Filter change
  filterChange(filter, event) {
    //let filterValues = {}
    this.filterValues[filter.columnProp] = event.target.value
      .trim()
      .toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  // Custom filter method for Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col]
              .trim()
              .toLowerCase()
              .split(' ')
              .forEach((word) => {
                if (
                  data[col].toString().toLowerCase().indexOf(word) != -1 &&
                  isFilterSet
                ) {
                  found = true;
                }
              });
          }
          return found;
        } else {
          return true;
        }
      };
      return nameSearch();
    };
    return filterFunction;
  }

  // Reset table filters
  resetFilters(input) {
    this.filterValues = {};
    this.filterSelectObj.forEach((value, key) => {
      console.log(value.modelValue);
      value.modelValue = '';
    });
    this.dataSource.filter = '';
    input.value = '';
  }
}
