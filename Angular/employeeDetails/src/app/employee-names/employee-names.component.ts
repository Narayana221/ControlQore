import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployeeDetailsType } from './IEmployeeDetailsType';

@Component({
  selector: 'app-employee-names',
  templateUrl: './employee-names.component.html',
  styleUrls: ['./employee-names.component.sass'],
})
export class EmployeeNamesComponent {
  //@Input() detailDisplay = false;
  @Output()  newDisplayEvent = new EventEmitter<IEmployeeDetailsType>();
  public arr: Array<IEmployeeDetailsType> = [
    {
      FirstName: 'Ruby',
      LastName: 'Susan',
      DOB: new Date('Dec 08 2000'),
      age: 21,
      JoiningDate: new Date('Jan 09 2023'),
      Country: 'India',
    },
    {
      FirstName: 'Christina',
      LastName: 'Mariam',
      DOB: new Date('Jul 08 2001'),
      age: 22,
      JoiningDate: new Date('Jan 09 2023'),
      Country: 'Italy',
    },
    {
      FirstName: 'Nanu',
      LastName: 'Menon',
      DOB: new Date('Jun 12 2001'),
      age: 21,
      JoiningDate: new Date('Jan 09 2023'),
      Country: 'Egypt',
    },
    {
      FirstName: 'Aisha',
      LastName: 'Mariam',
      DOB: new Date('Jul 08 2001'),
      age: 22,
      JoiningDate: new Date('Jan 09 2023'),
      Country: 'Italy',
    },
    {
      FirstName: 'Abin',
      LastName: 'Nizam',
      DOB: new Date('Jul 08 2001'),
      age: 22,
      JoiningDate: new Date('Jan 09 2023'),
      Country: 'India',
    },
  ];
  changeDisplay(value:IEmployeeDetailsType){
    this.newDisplayEvent.emit(value)
  }
}
