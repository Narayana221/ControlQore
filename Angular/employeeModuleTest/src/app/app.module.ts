import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,EmployeeModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
