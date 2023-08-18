import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';
import { IEmployee } from '../employee/iemployee';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.sass']
})
export class NewEmployeeComponent {

 newEmp : IEmployee = {
   id: 0,
   firstName: '',
   lastName: '',
   dOB: new Date(),
   age: 0,
   joiningDate: new Date(),
   country: ''
 }
  constructor(private empService:EmployeeService) {
    
    
  }
  id : number=0
  firstName : string=""
  lastName : string=""
  dateOfBirth = new Date()
  age : number=0
  joiningDate = new Date () 
  country : string=""
  profileForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth : new FormControl(''),
    age : new FormControl(''),
    joiningDate : new FormControl(''),
    country : new FormControl('')

  });

  onSubmit()
  {
   
    this.firstName = this.profileForm.get('firstName')?.value!;
    this.lastName = this.profileForm.get('lastName')?.value!;
    let d = new Date(this.profileForm.get('dateOfBirth')?.value!);
    this.dateOfBirth = d
    this.age = Number(this.profileForm.get('age')?.value!);
    let j  = new Date(this.profileForm.get('joiningDate')?.value!);
    this.joiningDate = j
    this.country = this.profileForm.get('country')?.value!;

    console.log(this.id,this.firstName,this.joiningDate)
    this.newEmp.id=this.empService.employeeList[this.empService.employeeList.length-1].id + 1
    this.newEmp.firstName=this.firstName;
    this.newEmp.lastName=this.lastName;
    this.newEmp.joiningDate=this.joiningDate;
    this.newEmp.dOB=this.dateOfBirth;
    this.newEmp.country=this.country;
    this.newEmp.age=this.age;
    this.empService.employeeList.push(this.newEmp)

  }
}
