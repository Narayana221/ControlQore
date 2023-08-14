import { Component } from '@angular/core';
import { IEmployee } from '../iemployee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-name',
  templateUrl: './employee-name.component.html',
  styleUrls: ['./employee-name.component.sass'],
})
export class EmployeeNameComponent {
  public emp: Array<IEmployee> = [];
  constructor(
    private route: Router,
    private empService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) {
    this.emp = empService.employeeList;
  }
  changeDisplay(value: IEmployee) {
    this.route.navigate([`./${value.id}/details`], {
      relativeTo: this.activatedRoute,
    });
  }
}
