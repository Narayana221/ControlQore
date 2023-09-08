import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Imanager } from '../imanager';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
})
export class ManagerComponent {
  managerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    userName: new FormControl(''),
    password: new FormControl(''),
    hotelName: new FormControl(''),
    locationId: new FormControl(0),
  });

  constructor(private apiService:AppServiceService, private router:Router) {
    
    
  }

  newManager! : Imanager

  back()
  {   this.router.navigate(['']);}

  onSubmit()
  {
    this.newManager = {
      name: this.managerForm.value.name,
      userRoleId: 2,
      email: this.managerForm.value.email,
      phone: this.managerForm.value.phone,
      userName: this.managerForm.value.userName,
      password: this.managerForm.value.password,
      hotelName: this.managerForm.value.hotelName,
      locationId:this.managerForm.value.locationId
    }
    console.log(this.newManager);
     return this.apiService.addManager(this.newManager).subscribe((data)=>{
      console.log(data);
      window.alert("Created New Manager");
    })
  }
changeCity(e:any)
{
  this.managerForm.value.locationId = Number(e.target.value);
  console.log(this.managerForm.value.locationId)
}

}
