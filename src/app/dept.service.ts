import { Injectable } from '@angular/core';
import { DepartmentData } from './departmentData.model';

export class DeptService {
  departmentfields: DepartmentData[] = [
    {
      allAssociates: 'Ann A.',
      dept: 'Hydrogen',
      status: 'Approved',
      week: {
        sun: '',
        mon: '10hrs',
        tue: '',
        wed: '',
        thu: '3hrs',
        fri: '3hrs',
        sat: ''
      },
      type: 'REQOFF'
    },
    {
      allAssociates: 'Anna Anne',
      dept: 'Oxygen',
      status: 'Rejected',
      week: {
        sun: '8hrs',
        mon: '1hr',
        tue: '3hrs',
        wed: '',
        thu: '3hrs',
        fri: '',
        sat: ''
      },
      type: 'REQON'
    },
    {
      allAssociates: 'Jay M.',
      dept: 'Hydrogen',
      status: 'Approved',
      week: {
        sun: '',
        mon: '1hr',
        tue: '',
        wed: '4hrs',
        thu: '',
        fri: '2hrs',
        sat: '1hr'
      },
      type: 'REQON'
    },
    {
      allAssociates: 'Neil K.',
      dept: 'Hydrogen',
      status: 'Approved',
      week: {
        sun: '6hr',
        mon: '10hrs',
        tue: '4hrs',
        wed: '',
        thu: '3hrs',
        fri: '',
        sat: '2hrs'
      },
      type: 'REQOFF'
    },
    {
      allAssociates: 'Kyle N.',
      dept: 'Oxygen',
      status: 'Rejected',
      week: {
        sun: '7hrs',
        mon: '',
        tue: '',
        wed: '',
        thu: '',
        fri: '2hrs',
        sat: ''
      },
      type: 'REQON'
    },
    {
      allAssociates: 'John N.',
      dept: 'Lithium',
      status: 'Rejected',
      week: {
        sun: '2hrs',
        mon: '',
        tue: '6hrs',
        wed: '3hrs',
        thu: '',
        fri: '3hrs',
        sat: '2hrs'
      },
      type: 'REQOFF'
    }
  ];

  constructor() {}

  getData() {
    return this.departmentfields;
  }
}
