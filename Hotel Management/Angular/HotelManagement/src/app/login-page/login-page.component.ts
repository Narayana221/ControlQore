import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';
import { Icustomer } from '../icustomer';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {

  constructor(private router: Router, private apiService: AppServiceService){}

  loginForm = new FormGroup(
    {
      userName: new FormControl(''),
      passWord: new FormControl('')
    }
  )
  
  passUserName: string | undefined;
  passPassword: string | undefined;
  userData?: string = "Enter a valid username";
  onSubmit(){
    this.passUserName = String(this.loginForm.value.userName)
    this.passPassword = String(this.loginForm.value.passWord)
    this.apiService.getUserDetails(this.passUserName, this.passPassword).subscribe((data)=>{
      this.userData = data;
    })

    console.log(this.userData);



  }

  goToNewAccount(){
    this.router.navigate(['./new']);
  }

}
