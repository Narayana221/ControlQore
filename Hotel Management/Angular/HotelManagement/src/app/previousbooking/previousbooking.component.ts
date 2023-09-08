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
        });
    });
  }

  rate(bookingId: number) {
    this.ratingInfo = {
      rating : Number(this.RatingForm.value.rating),
      bookingId: bookingId
    }
   
    this.apiService.addRating(this.ratingInfo).subscribe((data) => {
      console.log(data);
      window.alert('Successfully rated');
    });
  }
}
