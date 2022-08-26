import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ButtonNavComponent,
    AddCardComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    FontAwesomeModule
  ],
  exports: [
    ButtonNavComponent,
    AddCardComponent
  ]
})
export class ButtonsModule { }
