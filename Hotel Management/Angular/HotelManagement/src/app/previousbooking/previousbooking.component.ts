import { Component } from '@angular/core';
import { Ipreviousbooking } from '../ipreviousbooking';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Irating } from '../irating';

@Component({
  selector: 'app-previousbooking',
  templateUrl: './previousbooking.component.html',
  styleUrls: ['./previousbooking.component.sass'],
})
export class PreviousbookingComponent {
  previousBookings!: Array<Ipreviousbooking>;
  // selectedRating! : Ipreviousbooking
  obtainedUserId!: number;
  subscription!: Subscription;
  ratingInfo!: Irating;
  iteratorOne: number = 0;
  iteratorTwo: number = 0;
  iteratorThree: number = 0;
  iteratorFour: number = 0;
  currdate = new Date();

  ratingFlag: Array<boolean> = [false];
  cancelFlag: Array<boolean> = [false];
  alreadyRated: Array<number> = [0];
  startDate: Array<Date> = [];
  RatingForm = new FormGroup({
    rating: new FormControl(''),
  });

  private fetchPreviousBookings(): void {
    this.subscription = this.apiService.userId.subscribe((x: number) => {
      this.obtainedUserId = x;
      this.apiService
        .getPreviousBooking(this.obtainedUserId)
        .subscribe((data: Array<Ipreviousbooking>) => {
          this.previousBookings = data;
          console.log(this.previousBookings);
          


          this.previousBookings.forEach((element,index) => {
            if(element.rating == null)
            {
                this.alreadyRated[index]=0
                console.log(element.rating)
            }
            else
            {
              this.alreadyRated[index]= element.rating
              console.log(element.rating)
            }
            
          });
          this.previousBookings.forEach((element, index) => {
            this.startDate[index] = new Date(element.startDate);
            console.log(this.startDate[index]);
          });
          
          this.previousBookings.forEach((element, index) => {
            if (element.checkOutStatus != null) {
              this.ratingFlag[index] = true;
            } else {
              this.ratingFlag[index] = false;
            }
          });

          this.previousBookings.forEach((element, index) => {
            if (this.startDate[index].getTime() > this.currdate.getTime()) {
              this.cancelFlag[index] = true;
            } else {
              this.cancelFlag[index] = false;
            }
          });
        });
    });
  }

  constructor(private apiService: AppServiceService, private router: Router) {}
  ngOnInit() {
    this.fetchPreviousBookings();
  }

  rate(bookingId: number) {
    this.ratingInfo = {
      rating: Number(this.RatingForm.value.rating),
      bookingId: bookingId,
    };

    this.apiService.addRating(this.ratingInfo).subscribe((data) => {
      console.log(data);
      window.alert('Successfully rated');
      this.fetchPreviousBookings();
    });
  }

  cancel(bookingId: number) {
    this.apiService.cancelBooking(bookingId).subscribe((data) => {
      window.alert('Booking Canceled');
      this.fetchPreviousBookings();
    });
  }
}
