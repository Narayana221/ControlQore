import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Ibooking } from '../ibooking';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ibookhome } from '../ibookhome';
import { Iroomtype } from '../iroomtype';
import { IFilterroom } from '../ifilterroom';
import { Inoofrooms } from '../inoofrooms';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.sass']
})
export class BookingPageComponent {

  constructor(private route: Router, private apiService: AppServiceService) { }

  addBooking = new FormGroup({
    Start: new FormControl(''),
    End: new FormControl('')
  })

  book?: Ibooking
  sdate: Date = new Date(this.addBooking.value.Start!);

  userId?: number
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
    this.subscription = this.apiService.userId.subscribe((data: number) => this.userId = data)
    this.subscription = this.apiService.book.subscribe((data: Ibookhome) => this.bookingDetails = data)
    this.subscription = this.apiService.selectedroomTypeId.subscribe((data: Iroomtype) => this.roomtype = data)
    this.subscription = this.apiService.selectedHotelId.subscribe((data: Inoofrooms) => this.HotelId = data)
  }

  onSubmit() {
    this.book = {
      StartDate: (this.bookingDetails?.StartDate),
      EndDate: (this.bookingDetails?.EndDate),
      UserId: this.userId,
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
    this.route.navigate([""]);
  }

}
