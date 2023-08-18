import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor(private router : Router){
    
  }
 
  backToHome()
  {
    this.router.navigate(['.']);
  }
  onEmployeeClick(){
    this.router.navigate(['./employee']);
  }

  onDepartmentClick(){
    this.router.navigate(['./department']);
  }



}
