import { Component, EventEmitter, Output } from '@angular/core';
import { DeptType } from './deptType';
//import { DeptType } from './deptType';

@Component({
  selector: 'app-dept-name',
  templateUrl: './dept-name.component.html',
  styleUrls: ['./dept-name.component.sass']
})
export class DeptNameComponent {
  @Output() newDisplayEvent = new EventEmitter<DeptType>();
  public dept: Array<DeptType> = [
    {
      deptName: 'Cs',
      noOfEmployees: 20,
    },
    {
      deptName: 'ece',
      noOfEmployees: 50,
    },
    {
      deptName: 'mech',
      noOfEmployees: 100,
    },
  ];
  changeDisplay(value: DeptType) {
    this.newDisplayEvent.emit(value);
  }
}
