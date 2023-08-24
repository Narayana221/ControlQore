import { Component } from '@angular/core';
import { Idept } from './idept';


@Component({
  selector: 'app-deptt-home',
  templateUrl: './deptt-home.component.html',
  styleUrls: ['./deptt-home.component.sass']
})
export class DepttHomeComponent {
 public showGrid = true;
 public  selectObject! : Idept;
 displayFullDetails(value : Idept)
 { 
   this.showGrid = false;
   this.selectObject = value;
 }
 public changeDisplayInApp(){
  this.showGrid = true;
}


}
