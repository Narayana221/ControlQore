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
  currdate = new Date();
  ratingFlag: Array<boolean> = [false];
  cancelFlag: Array<boolean> = [false];
  RatingForm = new FormGroup({
    rating: new FormControl(''),
  });

  constructor(private apiService: AppServiceService, private router: Router) {}
  ngOnInit() {
    this.subscription = this.apiService.userId.subscribe((x: number) => {
      this.obtainedUserId = x;
      this.apiService
        .getPreviousBooking(this.obtainedUserId)
        .subscribe((data: Array<Ipreviousbooking>) => {
          this.previousBookings = data;
          console.log(this.previousBookings);
          const startDate = new Date(this.previousBookings[0].startDate)
          console.log(startDate);

          this.previousBookings.forEach((element) => {
            if (element.checkOutStatus != null) {
              this.ratingFlag[this.iteratorOne++] = true;
            } else {
              this.ratingFlag[this.iteratorOne++] = false;
            }
          });
          
          this.previousBookings.forEach((element) => {
            if (startDate < this.currdate) {
              this.cancelFlag[this.iteratorTwo++] = true;
            } else {
              this.cancelFlag[this.iteratorTwo++] = false;
            }
          });

  
        });
    });
  }

  rate(bookingId: number) {
    this.ratingInfo = {
      rating: Number(this.RatingForm.value.rating),
      bookingId: bookingId,
    };

    this.apiService.addRating(this.ratingInfo).subscribe((data) => {
      console.log(data);
      window.alert('Successfully rated');
    });
  }

  cancel()
  {
    
  }
}
