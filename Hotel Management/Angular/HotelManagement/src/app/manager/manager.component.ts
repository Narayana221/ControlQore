import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    name: new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    hotelName: new FormControl('', Validators.required),
    locationId: new FormControl(0),
  });

  constructor(private apiService:AppServiceService, private router:Router) {
    
    
  }

  newManager! : Imanager
  flag!: object;

  back()
  {   this.router.navigate(['']);}

  onSubmit()
  {
    this.newManager = {
      name: this.managerForm.value.name,
      userRoleId: 4,
      email: this.managerForm.value.email,
      phone: this.managerForm.value.phone,
      userName: this.managerForm.value.userName,
      password: this.managerForm.value.password,
      hotelName: this.managerForm.value.hotelName,
      locationId:this.managerForm.value.locationId
    }
    console.log(this.newManager);
     return this.apiService.addManager(this.newManager).subscribe((data)=>{
      this.flag = data
        if(!this.flag){
          window.alert("Existing userId or Email")
        }
        else{
          window.alert("Created New Manager");
          this.router.navigate(['']);
        }
      
      
    })
  }
changeCity(e:any)
{
  this.managerForm.value.locationId = Number(e.target.value);
  console.log(this.managerForm.value.locationId)
}

}
