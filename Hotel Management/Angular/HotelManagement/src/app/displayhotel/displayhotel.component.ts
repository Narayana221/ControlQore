import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { IFilterroom } from '../ifilterroom';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-displayhotel',
  templateUrl: './displayhotel.component.html',
  styleUrls: ['./displayhotel.component.sass']
})
export class DisplayhotelComponent {

  obtainedHotel! : Array<IFilterroom>;
  subscription!: Subscription ;
  constructor(private apiService : AppServiceService,) {
  }

  ngOnInit()
  {
    this.subscription = this.apiService.data.subscribe(
      (x:  Array<IFilterroom>) => (this.obtainedHotel = x)
    );
  }

}
