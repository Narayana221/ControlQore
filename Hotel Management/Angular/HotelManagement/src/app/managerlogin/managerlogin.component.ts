import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';
import { IRoomDetails } from '../i-room-details';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.sass']
})
export class ManagerloginComponent {

  constructor(private router: Router, private apiService: AppServiceService) { }

  userId: number = 0;
  RoomDetails?: Array<IRoomDetails>;
  subscription!: Subscription;
  // ngOnInit(){
  //   this.subscription = this.apiService.userId.subscribe((data: number) => {
  //     this.userId = data
  //     console.log(this.userId)
  //   })
  // }

  getCurrentBooking() {
    this.subscription = this.apiService.userId.subscribe(
      (data: number) => {
        (this.userId = data)
        this.apiService.getBookingDetailManager(this.userId).subscribe((data: Array<IRoomDetails>) => {
          this.RoomDetails = data;
          console.log(this.userId);
          console.log(this.RoomDetails);
        })
      })

  }



}
