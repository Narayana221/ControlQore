import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEmployee } from '../employee/iemployee';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.sass'],
})
export class SearchEmployeeComponent {
  employee: string = '';
  searchForm = new FormGroup({
    searchEmployee: new FormControl(''),
  });

  public emp: Array<IEmployee> = [];
  public chosen :Array<IEmployee> = [];
  constructor(
    //private route: Router,
    private empService: EmployeeService //private activatedRoute: ActivatedRoute
  ) {
    this.emp = empService.employeeList;
  }

  onSubmit() {
    this.employee = this.searchForm.get('searchEmployee')?.value!;
    console.log(this.employee);
    console.log(
      this.emp
        .filter((x) =>
          x.firstName
            .toLocaleLowerCase()
            .includes(this.employee.toLocaleLowerCase())
        )
        .map((x) => x)
    );
  }
  ngOnInit() {
    this.searchForm.controls.searchEmployee.valueChanges.subscribe((value) => {
      this.employee = this.searchForm.get('searchEmployee')?.value!;

      // console.log(
      //   this.emp
      //     .filter((x) =>
      //       x.firstName
      //         .toLocaleLowerCase()
      //         .includes(this.employee.toLocaleLowerCase())
      //     )
      //     .map(
      //       (x) =>
      //         `${x.firstName}  ${x.lastName}  ${x.age}   ${x.dOB}   ${x.country}`
      //     )

      this.chosen = this.emp
      .filter((x) =>
        x.firstName
          .toLocaleLowerCase()
          .includes(this.employee.toLocaleLowerCase())
      )
      .map(
        (x) =>x
          
      );
     


      //document.getElementById('message').innerHTML = this.emp;
    });
    
  }
}
