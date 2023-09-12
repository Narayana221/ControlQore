import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Iroomtype } from '../iroomtype';
import { Route, Router } from '@angular/router';
import { IFilterroom } from '../ifilterroom';
import { Inoofrooms } from '../inoofrooms';
import { Iuserreq } from '../iuserreq';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.sass'],
})
export class RoomtypeComponent {
  obtainedHotelId: Inoofrooms = {
    id: 0,
    hotelName: '',
    noofrooms: 0
  };

  obtainedUserReq: Iuserreq = {
    locationId: 0,
    startDate: '',
    endDate: '',
    noOfRooms: 0,
    rating: 0,
  }
  subscription!: Subscription;
  obtainedRoomTypeinfo!: Array<Iroomtype>;
  constructor(private apiService: AppServiceService, private router:Router) {}
  ngOnInit() {
    this.subscription = this.apiService.selectedHotelId.subscribe(
      (x: Inoofrooms) => {
        (this.obtainedHotelId = x)
        this.subscription = this.apiService.userReq.subscribe((x: Iuserreq)=> {
          this.obtainedUserReq = x
          this.apiService
            .getRoomType(this.obtainedHotelId, this.obtainedUserReq)
            .subscribe((data: Array<Iroomtype>) => {
              this.obtainedRoomTypeinfo = data;
              console.log(this.obtainedRoomTypeinfo);

            });
        })


          
      }
    );
  }
  bookNow(id:Iroomtype)
  {
    this.router.navigate(['./home/book'])
    this.apiService.emitroomTypeId(id);
  }
}
