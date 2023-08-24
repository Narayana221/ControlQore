import { Component, EventEmitter, Output } from '@angular/core';

import { DeptService } from '../dept.service';
import { Idept } from '../idept';


@Component({
  selector: 'app-dept-name',
  templateUrl: './dept-name.component.html',
  styleUrls: ['./dept-name.component.sass']
})
export class DeptNameComponent {
  @Output() newDisplayEvent = new EventEmitter<Idept>();


  constructor(private deptservice : DeptService) {
   
    
  }
  public deptList: Array<Idept> = [];

  public fetchDeptData()
  {
    this.deptservice.getAllDept().subscribe((data : Array<Idept>) => this.deptList = data)
  }
  ngOnInit()
  {
    this.fetchDeptData()
  }
  changeDisplay(value: Idept) {
    this.newDisplayEvent.emit(value);
  }
}
