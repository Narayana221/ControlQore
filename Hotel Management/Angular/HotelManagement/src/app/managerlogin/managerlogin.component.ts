import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrls: ['./managerlogin.component.sass']
})
export class ManagerloginComponent {
  
  constructor(private router: Router, private apiService: AppServiceService){}

  userId: number = 0;
  subscription!: Subscription;
  ngOnInit(){
    this.subscription = this.apiService.userId.subscribe((data: number) => this.userId = data)
  }

  
  
}
