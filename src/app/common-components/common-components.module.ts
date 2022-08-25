import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTableComponent } from './item-table/item-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusComponent } from './status/status.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';
import { HeaderInfoOrderComponent } from './header-info-order/header-info-order.component';
import { LastEditComponent } from './last-edit/last-edit.component';



@NgModule({
  declarations: [
    ItemTableComponent,
    StatusComponent,
    DetailOrderComponent,
    HeaderInfoOrderComponent,
    LastEditComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ItemTableComponent
  ]
})
export class CommonComponentsModule { }
