import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './item-table/item-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusComponent } from './status/status.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { HeaderInfoOrderComponent } from './header-info-order/header-info-order.component';
import { LastEditComponent } from './last-edit/last-edit.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersFormsModule } from '../forms/forms.module';
import { CardsModule } from '../cards/cards.module';
import { ODButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    ItemTableComponent,
    StatusComponent,
    DetailOrderComponent,
    HeaderInfoOrderComponent,
    LastEditComponent,
    AddOrderComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    OrdersFormsModule,
    CardsModule,
    ODButtonsModule
  ],
  exports: [
    ItemTableComponent,
    AddOrderComponent,

  ]
})
export class CommonComponentsModule { }
