import { Component } from '@angular/core';
import { IEmployee } from '../iemployee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass'],
})
export class EmployeeNameComponent  {
  
  //public emp: Array<IEmployee> = [];
  constructor(
    private route: Router,
    private empService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) 
  
  {
  
  }
  employeeList: Array<IEmployee> = [];


  private fetchEmployeeData(): void {
    this.empService.getData().subscribe(
      (data: Array<IEmployee>) => {
        this.employeeList = data;
      }
    );
  }

  changeDisplay(value: IEmployee) {
    this.route.navigate([`./${value.id}/details`], {
      relativeTo: this.activatedRoute,
    });
  }

  updateDisplay(value: IEmployee) {
    this.route.navigate([`./${value.id}/updates`], {
      relativeTo: this.activatedRoute,
    });
  }
  ngOnInit()
  {
    this.fetchEmployeeData()
  }

  delete(id : number){
    this.empService.deleteEmployee(id).subscribe((data) => console.log(data))
  }


    addNewEmployeePage()
    {
      this.route.navigate(['./newEmployee'], {
        relativeTo: this.activatedRoute
    });
  }

  employeeSearch()
  {
    this.route.navigate(['./searchEmployee'], {
      relativeTo: this.activatedRoute
  });
}
  
}
