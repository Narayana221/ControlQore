import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Icustomer } from '../icustomer';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent {

  constructor(private userService:AppServiceService ){}
  userForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl('')
    }
  )
  newUser?: Icustomer;

  onSubmit(){
    this.newUser = {
      name: this.userForm.value.name,
      userRoleId: 1,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      userName: this.userForm.value.userName,
      password: this.userForm.value.password
    }
    console.log(this.newUser);

    return this.userService.addUser(this.newUser).subscribe((data)=>{
      console.log(data);
    })

  }



}
