import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Idept } from '../idept';


@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.sass']
})
export class DeptDetailsComponent {
  @Input()
  public obtainedObject!: Idept;
  @Output()  goBack = new EventEmitter<boolean>();

  changeDisplay(){
    this.goBack.emit()
  }

}
