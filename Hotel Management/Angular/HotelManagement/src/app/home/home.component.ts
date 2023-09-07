import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Ibookhome } from '../ibookhome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(private router: Router, private apiService: AppServiceService,  private route: ActivatedRoute,){
  
  }

  
  public room : Array<IFilterroom> = [];
  HotelForm = new FormGroup(
    {
      locationId: new FormControl(0),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      noOfRooms: new FormControl(''),
      rating : new FormControl('')
    }
  )
  
  locationId: number = 0
  startDate:string=''
  endDate:string=''
  noOfRooms: number= 0
  rating : number = 0
  bookingDetails: Ibookhome = {
    noOfRooms: 0,
    StartDate: '',
    EndDate: ''
  }
 

  onSubmit(){
    
    this.startDate = (this.HotelForm.value.startDate!)
    this.endDate = (this.HotelForm.value.endDate!)
    this.noOfRooms = Number(this.HotelForm.value.noOfRooms)
    this.rating = Number(this.HotelForm.value.rating)
    this.bookingDetails= {
      noOfRooms: this.noOfRooms,
      StartDate: this.startDate,
      EndDate: this.endDate

    }
    this.apiService.emitbookingDetail(this.bookingDetails)
    console.log(this.locationId);
    console.log(this.noOfRooms)

    this.apiService.getHotelDetails(this.locationId,this.startDate,this.endDate,this.noOfRooms,this.rating).subscribe(
      (data: Array<IFilterroom>) =>
      {
        this.room = data;
        this.apiService.emitData(this.room);
      },
    
    );

    this.router.navigate(['./home/HotelList'])

    
}
changeCity(e:any)
{
  this.locationId = Number(e.target.value);
  //console.log(this.managerForm.value.locationId)
}

previousBooking()
{
  
}
}
