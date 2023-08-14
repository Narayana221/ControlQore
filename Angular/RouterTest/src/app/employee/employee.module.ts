import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeNameComponent } from './employee-name/employee-name.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';



@NgModule({
  declarations: [EmployeeNameComponent,
    EmployeeDetailsComponent],
  imports: [
    CommonModule
  ],
  exports : [ EmployeeNameComponent,
    EmployeeDetailsComponent]
})
export class EmployeeModule { }
