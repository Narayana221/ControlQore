import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Iroomtype } from '../iroomtype';
import { Inoofrooms } from '../inoofrooms';


@Component({
  selector: 'app-displayhotel',
  templateUrl: './displayhotel.component.html',
  styleUrls: ['./displayhotel.component.sass'],
  standalone: true,
  imports: [
    CommonModule
  ],
})
export class DisplayhotelComponent {
 
  obtainedHotel! : Array<IFilterroom>;
  subscription!: Subscription ;
  
  constructor(private apiService : AppServiceService,private router: Router, private activatedRoute: ActivatedRoute ) {
  }



  ngOnInit()
  {
    this.subscription = this.apiService.data.subscribe(
      (x:  Array<IFilterroom>) => (this.obtainedHotel = x)
    );
  }

  tempNoOfRooms: Inoofrooms = {
    id: 0,
    noofrooms: 0,
    hotelName: ''
  }

  NoOfRooms: number = 0;
  noOfRoomsSubscription = this.apiService.noOfROoms.subscribe(((x: number) =>(this.NoOfRooms = x)))

  proceed(hotelid: number, hotelName: string)
  {
    this.router.navigate(['./home/roomtypelist'])
    this.tempNoOfRooms = {
      id: hotelid,
      noofrooms: this.NoOfRooms,
      hotelName: hotelName
    }
    this.apiService.emitHotelId(this.tempNoOfRooms);
  
  }

  

}
