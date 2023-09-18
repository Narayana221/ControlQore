import {
  Component,
  EventEmitter,
  NO_ERRORS_SCHEMA,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Ibookhome } from '../ibookhome';
import { Iuserreq } from '../iuserreq';
import { IUserDto } from '../i-user-dto';
import { AuthService } from '../services/auth.service';
//import { AuthService } from '../services/auth.service';

@Component({
  // standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  //schemas : [NO_ERRORS_SCHEMA]
})
export class HomeComponent {
  constructor(
    private router: Router,
    private apiService: AppServiceService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  public room: Array<IFilterroom> = [];
  HotelForm = new FormGroup({
    locationId: new FormControl(0, Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required),
    noOfRooms: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  get locationId() {
    return this.HotelForm.get('locationId');
  }
  get startDate() {
    return this.HotelForm.get('emastartDateil');
  }
  get endDate() {
    return this.HotelForm.get('endDate');
  }
  get noOfRooms() {
    return this.HotelForm.get('noOfRooms');
  }
  get rating() {
    return this.HotelForm.get('rating');
  }

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

  minDate = new Date();
  currdate!:string

  tempData = localStorage.getItem('session');
  userdata = JSON.parse(this.tempData ? this.tempData : '{}');

  LogOut() {
    this.authService.logout()
  }

  formatDate(date: Date) {
    return `${date.getFullYear()}-${date.getMonth() + 1 <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}-${date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()}`;
  }

  ngOnInit() {
    this.currdate = this.formatDate(this.minDate);

  }

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
    this.apiService.emitUserReq(this.userReq);
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
