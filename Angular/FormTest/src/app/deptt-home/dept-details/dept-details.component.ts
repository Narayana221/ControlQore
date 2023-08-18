import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeptType } from '../dept-name/deptType';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.sass']
})
export class DeptDetailsComponent {
  @Input()
  public obtainedObject!: DeptType;
  @Output()  goBack = new EventEmitter<boolean>();

  changeDisplay(){
    this.goBack.emit()
  }

}
