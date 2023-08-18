import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeNameComponent } from './employee/employee-name/employee-name.component';
import { DepttHomeComponent } from './deptt-home/deptt-home.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';

const routes: Routes = [
  {
    path: 'employee',
    children: [
      {
        path: '',
        component: EmployeeNameComponent,
      },
      {
        path: 'newEmployee',
        component: NewEmployeeComponent,
      },
      {
        path: 'searchEmployee',
        component: SearchEmployeeComponent,
      },
      {
        path: ':id/details',
        component: EmployeeDetailsComponent,
      },
    ],

  },
  {path:'department', component : DepttHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
