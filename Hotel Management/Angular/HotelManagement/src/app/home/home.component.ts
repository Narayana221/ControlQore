import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Ibookhome } from '../ibookhome';
import { Iuserreq } from '../iuserreq';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private apiService: AppServiceService,
    private route: ActivatedRoute
  ) {}

  public room: Array<IFilterroom> = [];
  HotelForm = new FormGroup({
    locationId: new FormControl(0),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    noOfRooms: new FormControl(''),
    rating: new FormControl(''),
  });

  userReq: Iuserreq = {
    locationId: 0,
    startDate: '',
    endDate: '',
    noOfRooms: 0,
    rating: 0,
  };
  bookingDetails: Ibookhome = {
    noOfRooms: 0,
    StartDate: '',
    EndDate: '',
  };

  onSubmit() {
    
    this.userReq.startDate = this.HotelForm.value.startDate!;
    this.userReq.endDate = this.HotelForm.value.endDate!;
    this.userReq.noOfRooms = Number(this.HotelForm.value.noOfRooms);
    this.userReq.rating = Number(this.HotelForm.value.rating);
    this.bookingDetails = {
      noOfRooms: this.userReq.noOfRooms,
      StartDate: this.userReq.startDate,
      EndDate: this.userReq.endDate,
    };
    this.apiService.emitbookingDetail(this.bookingDetails);
    this.apiService.emitNoOfRooms(this.userReq.noOfRooms);
    this.apiService.emitUserReq(this.userReq)
    this.apiService
      .getHotelDetails(this.userReq)
      .subscribe((data: Array<IFilterroom>) => {
        this.room = data;
        this.apiService.emitData(this.room);
      });

    this.router.navigate(['./home/HotelList']);
  }
  changeCity(e: any) {
    this.userReq.locationId = Number(e.target.value);
    //console.log(this.managerForm.value.locationId)
  }

  previousBooking() {
    this.router.navigate(['./home/PreviousBooking']);
  }
}
