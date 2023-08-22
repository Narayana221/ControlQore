import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { HomeComponent } from './home/home.component';
import { DepttHomeComponent } from './deptt-home/deptt-home.component';
import { DeptModule } from './deptt-home/dept.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, DepttHomeComponent, NewEmployeeComponent, SearchEmployeeComponent, UpdateEmployeeComponent],
  imports: [BrowserModule, AppRoutingModule,EmployeeModule,DeptModule, ReactiveFormsModule,  HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
