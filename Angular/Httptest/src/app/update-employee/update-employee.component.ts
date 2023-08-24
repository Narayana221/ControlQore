import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';
import { IEmployee } from '../employee/iemployee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.sass'],
})
export class UpdateEmployeeComponent {
  public employeeId: number = 0;
  public employeeList: Array<IEmployee> = [];
  public detailsofEmp: IEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    eMail: '',
    phone: '',
    departmentId: 0,
    
  }

  newEmp: IEmployee = {
    id: 0,
    firstName: '',
    lastName: '',
    eMail: '',
    phone: '',
    departmentId: 0,
  };

  private fetchEmployeeData(): void {
    this.empService.getData().subscribe((data: Array<IEmployee>) => {
      this.employeeList = data;
      console.log(this.employeeList);
      this.detailsofEmp = this.employeeList.find(
        (x) => x.id === this.employeeId
      )!;
      console.log(this.detailsofEmp);
      this.profileForm.controls.firstName.setValue(this.detailsofEmp.firstName);
      this.profileForm.controls.lastName.setValue(this.detailsofEmp.lastName);
      this.profileForm.controls.eMail.setValue(this.detailsofEmp.eMail);
      this.profileForm.controls.phone.setValue(this.detailsofEmp.phone);
      this.profileForm.controls.departmentId.setValue((this.detailsofEmp.departmentId).toString());
    });
  }
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.fetchEmployeeData();
  }

  ngOnInit() {
    const id: string = this.route.snapshot.params['id'];
    this.employeeId = Number(id);
    
  };
 
  firstName: string = '';
  lastName: string = '';
  eMail: string = '';
  phone: string = '';
  departmentId: number = 0;
  profileForm = new FormGroup({
    firstName: new FormControl(this.detailsofEmp.firstName),
    lastName: new FormControl(this.detailsofEmp.lastName),
    eMail: new FormControl(''),
    phone: new FormControl(''),
    departmentId: new FormControl(''),
  });
  

  onSubmit() {
    this.firstName = this.profileForm.get('firstName')?.value!;
    this.lastName = this.profileForm.get('lastName')?.value!;
    this.eMail = this.profileForm.get('eMail')?.value!;
    this.phone = this.profileForm.get('phone')?.value!;
    this.departmentId = Number(this.profileForm.get('departmentId')?.value!);
   
    this.newEmp.firstName = this.firstName;
    this.newEmp.lastName = this.lastName;
    this.newEmp.eMail = this.eMail;
    this.newEmp.phone = this.phone;
    this.newEmp.departmentId = this.departmentId;
    console.log(this.detailsofEmp.firstName)
    this.empService
    .updateEmployee(this.newEmp,this.detailsofEmp?.id)
    .subscribe((data) => console.log(data));
    alert("Submit Successful")
    this.router.navigate(['./employee']);
  }
}
