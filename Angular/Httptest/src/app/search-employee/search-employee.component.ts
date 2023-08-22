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
  employeeName: string = '';
  searchForm = new FormGroup({
    searchEmployee: new FormControl(''),
  });

  public emp: Array<IEmployee> = [];
  public chosen: Array<IEmployee> = [];
  constructor(
    //private route: Router,
    private empService: EmployeeService //private activatedRoute: ActivatedRoute
  ) {
    // this.emp = empService.employeeList;
  }

  onSubmit() {
    this.employeeName = this.searchForm.get('searchEmployee')?.value!;
    console.log(this.employeeName);
    console.log(
      this.emp
        .filter((x) =>
          x.firstName
            .toLocaleLowerCase()
            .includes(this.employeeName.toLocaleLowerCase())
        )
        .map((x) => x)
    );
  }

  private fetchEmployeeData(): void {
    this.empService.getData().subscribe(
      (data: Array<IEmployee>) => {
        this.emp = data;
      }
    );
  }
  ngOnInit() {
    this.fetchEmployeeData();
    this.searchForm.controls.searchEmployee.valueChanges.subscribe((value) => {
      this.employeeName = this.searchForm.get('searchEmployee')?.value!;
      this.chosen = this.emp
        .filter((x) =>
          x.firstName
            .toLocaleLowerCase()
            .includes(this.employeeName.toLocaleLowerCase())
        )
        .map((x) => x);
    });
  }
}
