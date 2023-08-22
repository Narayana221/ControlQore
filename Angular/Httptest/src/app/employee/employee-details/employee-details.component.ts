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
 public detailsofEmp? : IEmployee 
 //= {
//   id : 0,
//   firstName : "",
//   lastName : "history",
//   dOB : new Date(),
//   age : 2,
//   joiningDate : new Date(),
//   country : ""
// }
public employeeId : number = 0;
public employeeList : Array<IEmployee> = [];

constructor(private empService: EmployeeService, private route: ActivatedRoute,
  private router: Router) {
 // this.empList = this.empService.employeeList;
}

private fetchEmployeeData(): void {
  this.empService.getData().subscribe(
    (data: Array<IEmployee>) => {
      this.employeeList = data;
      console.log(this.employeeList)
      // const id: string = this.route.snapshot.params['id'];
      // this.employeeId = Number(id);
      this.detailsofEmp = this.employeeList.find(x => x.id === this.employeeId)
      console.log(this.detailsofEmp)
    }
  );
}
 

ngOnInit(){
  this.fetchEmployeeData()
  const id: string = this.route.snapshot.params['id'];
  console.log(this.route);
  this.employeeId = Number(id);
  console.log( this.employeeId)
}

goBack(){
  this.router.navigate(['./employee']);
}

}
