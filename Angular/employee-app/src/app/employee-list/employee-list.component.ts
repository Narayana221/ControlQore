import { Component } from '@angular/core';
import { IEmployeeType } from './IEmployeeType';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent {

 public arr : Array<IEmployeeType> = [
  {
    FirstName : "Ruby",
    LastName : "Susan",
    DOB : new Date("Dec 08 2000"),
    age : 21,
    JoiningDate :  new Date("Jan 09 2023"),
    Country : "India"
  },
  {
    FirstName : "Christina",
    LastName : "Mariam",
    DOB : new Date("Jul 08 2001"),
    age : 22,
    JoiningDate :  new Date("Jan 09 2023"),
    Country : "Italy"
  },
  {
    FirstName : "Nanu",
    LastName : "Menon",
    DOB : new Date("Jun 12 2001"),
    age : 21,
    JoiningDate :  new Date("Jan 09 2023"),
    Country : "Egypt"
  },
  {
    FirstName : "Aisha",
    LastName : "Mariam",
    DOB : new Date("Jul 08 2001"),
    age : 22,
    JoiningDate :  new Date("Jan 09 2023"),
    Country : "Italy"
  },
  {
    FirstName : "Abin",
    LastName : "Nizam",
    DOB : new Date("Jul 08 2001"),
    age : 22,
    JoiningDate :  new Date("Jan 09 2023"),
    Country : "India"
  }
 ];



}
