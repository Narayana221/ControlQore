import { Component } from '@angular/core';
import { Ipreviousbooking } from '../ipreviousbooking';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Irating } from '../irating';
import { IUserDto } from '../i-user-dto';

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

  tableDisplayFlag : boolean =false

  ratingFlag: Array<boolean> = [false];
  cancelFlag: Array<boolean> = [false];
  alreadyRated: Array<number> = [0];
  startDate: Array<Date> = [];
  RatingForm = new FormGroup({
    rating: new FormControl(''),
  });

  tempData?: string | null
  userdata: IUserDto ={
    userId: 0,
    userRoleId: 0,
    name: '',
    userName: '',
    phone: '',
    email: ''
  } 

  private fetchPreviousBookings(): void {
    
    this.tempData = localStorage.getItem('session')
    this.userdata = JSON.parse(this.tempData? this.tempData: '')
      this.obtainedUserId = this.userdata.userId;
      this.apiService
        .getPreviousBooking(this.obtainedUserId)
        .subscribe((data: Array<Ipreviousbooking>) => {
          this.previousBookings = data;
          console.log(this.previousBookings);
          if(this.previousBookings.length != 0 )
          {
            this.tableDisplayFlag = true
          }


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
    };
  

  constructor(private apiService: AppServiceService, private router: Router) {}
  ngOnInit() {
    this.fetchPreviousBookings();
  }

  rate(bookingId: number) {
    this.ratingInfo = {
      rating: Number(this.RatingForm.value.rating),
      bookingId: bookingId,
    };
    if((this.ratingInfo.rating)%1 ===0)
    {
      this.apiService.addRating(this.ratingInfo).subscribe((data) => {
        console.log(data);
        window.alert('Successfully rated');
        this.fetchPreviousBookings();
      });
    }
    else
    {
      window.alert('Enter a whole number from 1-5');
    }


   
  }

  cancel(bookingId: number,bookedroomId : number) {
    this.apiService.cancelBooking(bookingId,bookedroomId).subscribe((data) => {
      window.alert('Booking Canceled');
      this.fetchPreviousBookings();
    });
  }
}
