import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { DeptNameComponent } from './dept-name/dept-name.component';

@NgModule({
  declarations: [DeptDetailsComponent,DeptNameComponent],
  imports: [
    CommonModule,
    
  ],
  exports : [ DeptDetailsComponent,DeptNameComponent]
})
export class DeptModule { }
