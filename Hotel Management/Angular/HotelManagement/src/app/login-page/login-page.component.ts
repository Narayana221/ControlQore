import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {

  loginForm = new FormGroup(
    {
      userName: new FormControl(''),
      passWord: new FormControl('')
    }
  )

  onSubmit(){

  }

  newAccount(){
    
  }

}
