import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayhotel',
  templateUrl: './displayhotel.component.html',
  styleUrls: ['./displayhotel.component.sass']
})
export class DisplayhotelComponent {
 
  obtainedHotel! : Array<IFilterroom>;
  subscription!: Subscription ;
  constructor(private apiService : AppServiceService, private router: Router) {
  }

  ngOnInit()
  {
    this.subscription = this.apiService.data.subscribe(
      (x:  Array<IFilterroom>) => (this.obtainedHotel = x)
    );
  }

  booking(){
    this.router.navigate(['./home/book'])
  }

}
