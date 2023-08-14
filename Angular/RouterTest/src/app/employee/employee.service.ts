import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  public employeeList: Array<IEmployee> = [
    { 
      id : 1,
      firstName: 'Ruby',
      lastName: 'Susan',
      dOB: new Date('Dec 08 2000'),
      age: 21,
      joiningDate: new Date('Jan 09 2023'),
      country: 'India',
    },
    { 
      id : 2,
      firstName: 'Christina',
      lastName: 'Mariam',
      dOB: new Date('Jul 08 2001'),
      age: 22,
      joiningDate: new Date('Jan 09 2023'),
      country: 'Italy',
    },
    {
      id : 3,
      firstName: 'Nanu',
      lastName: 'Menon',
      dOB: new Date('Jun 12 2001'),
      age: 21,
      joiningDate: new Date('Jan 09 2023'),
      country: 'Egypt',
    }
   
  ];
}
