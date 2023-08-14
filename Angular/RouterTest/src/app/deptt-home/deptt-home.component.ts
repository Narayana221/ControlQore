import { Component } from '@angular/core';
import { DeptType } from './dept-name/deptType';

@Component({
  selector: 'app-deptt-home',
  templateUrl: './deptt-home.component.html',
  styleUrls: ['./deptt-home.component.sass']
})
export class DepttHomeComponent {
 public showGrid = true;
 public  selectObject! : DeptType;
 displayFullDetails(value : DeptType)
 { 
   this.showGrid = false;
   this.selectObject = value;
 }
 public changeDisplayInApp(){
  this.showGrid = true;
}


}
