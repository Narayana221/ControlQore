import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Ibooking } from '../ibooking';
import { FormControl, FormGroup } from '@angular/forms';

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

    onSubmit(){
      this.book = {
        StartDate: new Date(this.addBooking.value.End!),
        EndDate: new Date(this.addBooking.value.End!),
        UserId: 36,
        NoOfRooms: 2,
        PaymentStatus: true,
        TotalPrice: 1292.40,
        HotelId: 11
      }
      console.log(this.book.EndDate)
      this.apiService.addBooking(this.book).subscribe((data)=>{
        console.log(data)
      })
    }



}
