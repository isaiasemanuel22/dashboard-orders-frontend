import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavComponent } from './button-nav/button-nav.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './button/button.component';
import { CardsModule } from '../cards/cards.module';
@NgModule({
  declarations: [
    ButtonNavComponent,
    AddCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    CardsModule
  ],
  exports: [
    ButtonNavComponent,
    AddCardComponent,
    ButtonComponent
  ]
})
export class ODButtonsModule { }
