import { Component } from '@angular/core';
import { IEmployee } from '../iemployee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent {
public detailsofEmp? : IEmployee;
public employeeId : number = 0;
public empList : Array<IEmployee> = [];

constructor(private empService: EmployeeService, private route: ActivatedRoute,
  private router: Router) {
  this.empList = this.empService.employeeList;
}
ngOnInit(): void{
  const id: string = this.route.snapshot.params['id'];
  console.log(this.route);
  this.employeeId = Number(id);
  this.detailsofEmp = this.empList.find(x => x.id === this.employeeId);
}
goBack(){
  this.router.navigate(['./employee']);
}

}
