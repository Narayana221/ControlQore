import { Component } from '@angular/core';
import { IEmployeeDetailsType } from './employee/employee-names/IEmployeeDetailsType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'employeeDetails';
  selectedObject!:  IEmployeeDetailsType
  public showTable = true;

  public changeDisplayInApp(){
    this.showTable = true;
  }

  public showGridInApp(a:IEmployeeDetailsType){
    this.showTable = false;
    this.selectedObject = a;

    

  }
}
