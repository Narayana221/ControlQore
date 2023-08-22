import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeNameComponent } from './employee-name/employee-name.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [EmployeeNameComponent,
    EmployeeDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [ EmployeeNameComponent,
    EmployeeDetailsComponent]
})
export class EmployeeModule {


  constructor(private http: HttpClient) {
    
    
  }
 }
