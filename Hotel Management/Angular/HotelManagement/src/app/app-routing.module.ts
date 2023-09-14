import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { DisplayhotelComponent } from './displayhotel/displayhotel.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { ManagerComponent } from './manager/manager.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { PreviousbookingComponent } from './previousbooking/previousbooking.component';
import { authGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'new',
    component: NewUserComponent,
  },
  {
    path: 'manager',
    component: ManagerComponent,
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'PreviousBooking',
        component: PreviousbookingComponent,
        canActivate: [authGuardGuard]
      },
      {
        path: 'HotelList',
        component: DisplayhotelComponent,
      },
      {
        path: 'roomtypelist',
        component: RoomtypeComponent,
      },
      {
        path: 'book',
        component: BookingPageComponent,
        canActivate: [authGuardGuard]
      },
    ],
    // canActivate: [authGuardGuard]

  },{
    path: 'managerlogin',
    component: ManagerloginComponent,
    canActivate: [authGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
