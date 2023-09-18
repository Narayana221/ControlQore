import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';
import { IRoomDetails } from '../i-room-details';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
//import { AuthService } from '../services/auth.service';
import { IUserDto } from '../i-user-dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.sass']
})
export class ManagerloginComponent {
  user: IUserDto | undefined;

  constructor(private router: Router, private apiService: AppServiceService, private authService: AuthService) { }

  userId: number = 0;
  RoomDetails?: Array<IRoomDetails>;
  subscription!: Subscription;
  viewTableFlag: boolean = false;
  updateBookings: boolean = false;

  formGroup = new FormGroup({
    bookings: new FormArray([])
  });
  // formGroup = new FormGroup({
  //   checkIn: new FormControl(''),
  //   checkOut: new FormControl('')
  // });
  CheckInGroup = new FormGroup({
    checkInControl: new FormControl('')
  });
  CheckOutGroup = new FormGroup({
    checkOutControl: new FormControl('')
  });

  // ngOnInit(){
  //   this.subscription = this.apiService.userId.subscribe((data: number) => {
  //     this.userId = data
  //     console.log(this.userId)
  //   })
  // }


  updateCurrentBooking() {
    this.viewTableFlag = false;
    this.updateBookings = true;
    this.user = this.authService.getUser()
    if (this.user){
      this.apiService.getBookingDetailManager(this.user?.userId).subscribe((data: Array<IRoomDetails>) => {
        this.RoomDetails = data;
        data.forEach((d, index) => {
          const fg = this.getFormControlGroup(this.parseDate(new Date(d.startDate)),
            this.parseDate(new Date(d.endDate)));
          this.formArray.push(fg);
          // this.formArray.at(index).patchValue({
          //   checkIn: d.startDate.toLocaleDateString(),
          //   checkOut: d.endDate.toLocaleDateString()
          // });
        });
        console.log(this.userId);
        console.log(this.RoomDetails);
      })
    }
  }

  private parseDate(date: Date) {
    // return `${date.getDay()+1}-${date.getMonth() + 1}-${date.getFullYear()}`
    return `${date.getFullYear()}-${date.getMonth() + 1 <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}`;
  }
  getCurrentBooking() {
    this.updateBookings = false;
    this.viewTableFlag = true;
        this.user = this.authService.getUser()
        if(this.user){
          this.apiService.getBookingDetailManager(this.user?.userId).subscribe((data: Array<IRoomDetails>) => {
            this.RoomDetails = data;
          })
        }
        else{
          window.alert("Please login for view currrent bookings")
        }
        
      
  }

  getAllBookings() {
    this.updateBookings = false;
    this.viewTableFlag = true;
        this.user = this.authService.getUser()
        if(this.user){
          this.userId = this.user.userId
          this.apiService.getAllBookingDetailManager(this.userId).subscribe((data: Array<IRoomDetails>) => {
            this.RoomDetails = data;
          })
        }
        
      
  }


  getFormGroup(index: number): FormGroup {
    return this.formArray.at(index) as FormGroup
  }

  get formArray() {
    return this.formGroup.get('bookings') as FormArray;
  }

  private getFormControlGroup(startDate: string, endDate: string): FormGroup {0
    return new FormGroup({
      checkIn: new FormControl(startDate),
      checkOut: new FormControl(endDate)
    });
  }
  checkIn: Date = new Date('1999-09-09')
  checkOut: Date = new Date('1999-09-09');

  LogOut(){
    this.authService.logout();
    
  }
  
  updateCheckIn(index: number, roomId: number, bookingId: number) {
    this.checkIn = this.formArray.at(index).value.checkIn
    this.checkOut = this.formArray.at(index).value.checkOut
    console.log(this.checkIn)
    console.log(this.checkOut)
    this.apiService.updateCheckIn(this.checkIn, this.checkOut, roomId, bookingId).subscribe((data) => data)
    window.alert(`You have successfully updated CheckIn and CheckOut
    if you want to see the updated dates click on 'View current bookings'`)

  }
}
