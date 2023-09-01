import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [{
  path:'' , component: LoginPageComponent
},{
  path: 'new', component: NewUserComponent
},{
  path: 'hi', component: NewUserComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
