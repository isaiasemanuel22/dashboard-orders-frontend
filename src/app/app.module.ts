import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { HomeComponent } from './views/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService } from './resources/orders.service';
import { AddOrderComponent } from './views/add-order/add-order.component';
import { ODButtonsModule } from './buttons/buttons.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    FontAwesomeModule,
    LayoutModule,
    HttpClientModule,
    ODButtonsModule
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
