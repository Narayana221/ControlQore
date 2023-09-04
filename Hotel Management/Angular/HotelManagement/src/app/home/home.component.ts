import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';

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
      location: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      noOfRooms: new FormControl(''),
      rating : new FormControl('')
    }
  )
  
  location: string = ''
  startDate:string=''
  endDate:string=''
  noOfRooms: number= 0
  rating : number = 0
 

  onSubmit(){
    this.location = (this.HotelForm.value.location!)
    this.startDate = (this.HotelForm.value.startDate!)
    this.endDate = (this.HotelForm.value.endDate!)
    this.noOfRooms = Number(this.HotelForm.value.noOfRooms)
    this.rating = Number(this.HotelForm.value.rating)

    console.log(this.location);
    console.log(this.startDate);
    console.log(this.endDate)
    console.log(this.noOfRooms)

    this.apiService.getHotelDetails(this.location,this.startDate,this.endDate,this.noOfRooms,this.rating).subscribe(
      (data: Array<IFilterroom>) =>
      {
        this.room = data;
        this.apiService.emitData(this.room);
      },
    
    );

    //this.apiService.emitData(this.room);

    this.router.navigate(['./home/HotelList'])

    
}
}
