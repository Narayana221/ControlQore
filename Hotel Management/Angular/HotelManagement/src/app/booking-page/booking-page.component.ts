import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Ibooking } from '../ibooking';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ibookhome } from '../ibookhome';
import { Iroomtype } from '../iroomtype';
import { Inoofrooms } from '../inoofrooms';
import { IUserDto } from '../i-user-dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.sass']
})
export class BookingPageComponent {

  constructor(private route: Router, private apiService: AppServiceService, private authService: AuthService) { }

  addBooking = new FormGroup({
    Start: new FormControl(''),
    End: new FormControl('')
  })

  book?: Ibooking
  sdate: Date = new Date(this.addBooking.value.Start!);

  user: IUserDto | undefined;
  bookingDetails: Ibookhome = {
    noOfRooms: 0,
    StartDate: '',
    EndDate: ''
  }
  subscription!: Subscription;
  roomtype: Iroomtype = {
    roomCost: 0,
    roomTypeId: 0,
    roomName: ''
  }

  HotelId: Inoofrooms = {
    id: 0,
    noofrooms: 0,
    hotelName: ''
  }
 

  ngOnInit() {
    this.user = this.authService.getUser()
    this.subscription = this.apiService.book.subscribe((data: Ibookhome) => this.bookingDetails = data)
    this.subscription = this.apiService.selectedroomTypeId.subscribe((data: Iroomtype) => this.roomtype = data)
    this.subscription = this.apiService.selectedHotelId.subscribe((data: Inoofrooms) => this.HotelId = data)
  }
  flag: boolean = true;
  onSubmit() {
    this.flag = false;
    this.book = {
      StartDate: (this.bookingDetails?.StartDate),
      EndDate: (this.bookingDetails?.EndDate),
      UserId: this.user?.userId,
      NoOfRooms: this.bookingDetails?.noOfRooms,
      PaymentStatus: true,
      TotalPrice: (this.roomtype.roomCost * this.bookingDetails.noOfRooms),
      HotelId: this.HotelId.id,
      RoomTypeId: this.roomtype.roomTypeId
    }
    console.log(this.book.UserId)
    this.apiService.addBooking(this.book).subscribe((data) => {
      console.log(data)
    })
    window.alert("Successufully Booked Your Room")
  }

  home() {
    this.route.navigate(['./home'])
  }

}
