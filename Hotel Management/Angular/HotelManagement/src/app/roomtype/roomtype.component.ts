import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppServiceService } from '../app-service.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Iroomtype } from '../iroomtype';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-roomtype',
  templateUrl: './roomtype.component.html',
  styleUrls: ['./roomtype.component.sass'],
})
export class RoomtypeComponent {
  obtainedHotelId!: number;
  subscription!: Subscription;
  obtainedRoomTypeinfo!: Array<Iroomtype>;
  constructor(private apiService: AppServiceService, private router:Router) {}
  ngOnInit() {
    this.subscription = this.apiService.selectedHotelId.subscribe(
      (x: number) => {
        (this.obtainedHotelId = x)
          this.apiService
            .getRoomType(this.obtainedHotelId)
            .subscribe((data: Array<Iroomtype>) => {
              this.obtainedRoomTypeinfo = data;
              console.log(this.obtainedRoomTypeinfo);

            });
      }
    );
  }
  bookNow(id:Iroomtype)
  {
    this.router.navigate(['./home/book'])
    this.apiService.emitroomTypeId(id);
  }
}
