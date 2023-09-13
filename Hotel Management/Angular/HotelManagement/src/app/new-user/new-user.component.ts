import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Icustomer } from '../icustomer';
import { AppServiceService } from '../app-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent {

  constructor(private userService: AppServiceService, private router: Router) { }
  userForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
  )
  newUser?: Icustomer;
  flag!: object;

  onSubmit() {
    if (this.userForm.valid) {
      this.newUser = {
        name: this.userForm.value.name,
        userRoleId: 3,
        email: this.userForm.value.email,
        phone: this.userForm.value.phone,
        userName: this.userForm.value.userName,
        password: this.userForm.value.password
      }
      console.log(this.newUser);
      return this.userService.addUser(this.newUser).subscribe((data) => {
        this.flag = data
        if(!this.flag){
          window.alert("Existing userId or Email")
        }
        else{
          window.alert("Created New User");
          this.router.navigate(['']);

        }
        
      })
    }
    else {
      window.alert('Please fill out the form correctly.');
      return 0;
    }

  }

  back() {
    this.router.navigate(['']);
  }

  register() {
    this.router.navigate(['./manager'])
  }



}
