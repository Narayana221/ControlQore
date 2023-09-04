import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { DisplayhotelComponent } from './displayhotel/displayhotel.component';

const routes: Routes = [{
  path:'' , component: LoginPageComponent
},{
  path: 'new', component: NewUserComponent
},{
  path: 'home', 
  children:[
    {
    path : '', component: HomeComponent
    },
    {
      path : 'HotelList', component : DisplayhotelComponent
    }
  ]
  
 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
