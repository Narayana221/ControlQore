import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeNamesComponent } from './employee-names/employee-names.component';
import { EmployeeFullDetailsComponent } from './employee-full-details/employee-full-details.component';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    EmployeeNamesComponent,
    EmployeeFullDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
