import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { IEmployeeDetailsType } from '../employee-names/IEmployeeDetailsType';


@Component({
  selector: 'app-employee-full-details',
  templateUrl: './employee-full-details.component.html',
  styleUrls: ['./employee-full-details.component.sass']
})
export class EmployeeFullDetailsComponent {
  // @Input()
  // obtainedObject!: IEmployeeDetailsType;
  @Output()  goBack = new EventEmitter<boolean>();

changeDisplay(){
  this.goBack.emit()
}
}
