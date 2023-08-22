import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';
import { IEmployee } from '../employee/iemployee';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.sass'],
})
export class NewEmployeeComponent {
  newEmp: IEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    eMail: '',
    phone: '',
    departmentId: 0,
  };
  constructor(private empService: EmployeeService) {}
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  eMail: string = '';
  phone:  string = '';
  departmentId: number = 0;

  profileForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    eMail: new FormControl(''),
    phone: new FormControl(''),
    departmentId: new FormControl(''),
  });

  onSubmit() {
    this.firstName = this.profileForm.get('firstName')?.value!;
    this.lastName = this.profileForm.get('lastName')?.value!;
    this.eMail = this.profileForm.get('eMail')?.value!;
    this.phone = (this.profileForm.get('phone')?.value!);
    this.departmentId = Number(this.profileForm.get('departmentId')?.value!);

    //this.newEmp.id=this.empService.employeeList[this.empService.employeeList.length-1].id + 1
    this.newEmp.firstName = this.firstName;
    this.newEmp.lastName = this.lastName;
    this.newEmp.eMail = this.eMail;
    this.newEmp.phone = this.phone;
    this.newEmp.departmentId = this.departmentId;
    //this.empService.employeeList.push(this.newEmp)

    this.empService
      .addEmployee(this.newEmp)
      .subscribe((data) => console.log(data));
  }
}
