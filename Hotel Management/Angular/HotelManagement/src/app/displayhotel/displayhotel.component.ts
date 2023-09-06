import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';


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
  proceed(id:number)
  {
    this.router.navigate(['./home/roomtypelist']),{
      //relativeTo: this.activatedRoute,
    }
    this.apiService.emitHotelId(id);
  
  }

  booking(){
    this.router.navigate(['./home/book'])
  }

}
