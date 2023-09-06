import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DisplayhotelComponent } from './displayhotel/displayhotel.component';

import { BookingPageComponent } from './booking-page/booking-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomtypeComponent } from './roomtype/roomtype.component';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NewUserComponent,
    HomeComponent,
   // DisplayhotelComponent,

    BookingPageComponent,
   RoomtypeComponent,
   ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
