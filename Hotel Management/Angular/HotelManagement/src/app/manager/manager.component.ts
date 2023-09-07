import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent {

  managerForm = new FormGroup(
    {
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      userName: new FormControl(''),
      password: new FormControl('')
    }
  )

}
