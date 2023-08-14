import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeNameComponent } from './employee/employee-name/employee-name.component';
import { DepttHomeComponent } from './deptt-home/deptt-home.component';

const routes: Routes = [
  {
    path: 'employee',
    children: [
      {
        path: '',
        component: EmployeeNameComponent,
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
