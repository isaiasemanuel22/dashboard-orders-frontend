import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavComponent } from './button-nav/button-nav.component';



@NgModule({
  declarations: [
    ButtonNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonNavComponent
  ]
})
export class ButtonsModule { }
