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
export class EmployeeNameComponent {
  
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dateOfBirth : new FormControl(''),
    age : new FormControl(''),
    joiningDate : new FormControl(''),
    country : new FormControl('')

  });



  public emp: Array<IEmployee> = [];
  constructor(
    private route: Router,
    private empService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) 
  
  {
    this.emp = empService.employeeList;
  }
  changeDisplay(value: IEmployee) {
    this.route.navigate([`./${value.id}/details`], {
      relativeTo: this.activatedRoute,
    });
  }

  onSubmit()
    {
          //console.log(1)
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
