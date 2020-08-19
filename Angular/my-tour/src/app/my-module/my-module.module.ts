import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompComponent } from './my-comp/my-comp.component';



@NgModule({
  declarations: [MyCompComponent],
  exports:[MyCompComponent],
  imports: [
    CommonModule
  ]
})
export class MyModuleModule { }
