import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Ibooking } from '../ibooking';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ibookhome } from '../ibookhome';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.sass']
})
export class BookingPageComponent {

    constructor(private route: Router, private apiService: AppServiceService){}

    addBooking = new FormGroup({
      Start: new FormControl(''),
      End: new FormControl('')
    })

    book?: Ibooking
    sdate: Date =  new  Date( this.addBooking.value.Start!);

    userId?: number
    bookingDetails?: Ibookhome
    subscription!: Subscription ;

    
    ngOnInit()
  {
    this.subscription = this.apiService.userId.subscribe((data: number)=> this.userId = data)
    this.subscription = this.apiService.book.subscribe((data: Ibookhome)=> this.bookingDetails = data)
    
  }

    onSubmit(){
      this.book = {
        StartDate:  (this.bookingDetails?.StartDate),
        EndDate: (this.bookingDetails?.EndDate),
        UserId: this.userId,
        NoOfRooms: this.bookingDetails?.noOfRooms,
        PaymentStatus: true,
        TotalPrice: (2*1299),
        HotelId: 11
      }
      console.log(this.book.UserId)
      this.apiService.addBooking(this.book).subscribe((data)=>{
        console.log(data)
      })
    }



}
