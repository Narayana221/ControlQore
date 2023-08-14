import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';
import { HomeComponent } from './home/home.component';
import { DepttHomeComponent } from './deptt-home/deptt-home.component';
import { DeptModule } from './deptt-home/dept.module';



@NgModule({
  declarations: [AppComponent, HomeComponent, DepttHomeComponent],
  imports: [BrowserModule, AppRoutingModule,EmployeeModule,DeptModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
