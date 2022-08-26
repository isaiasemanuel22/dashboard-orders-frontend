import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './common-components/common-components.module';
import { HomeComponent } from './views/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from './layout/layout.module';
import { ButtonsModule } from './buttons/buttons.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OrdersService } from './resources/orders.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    FontAwesomeModule,
    LayoutModule,
    ButtonsModule,
    HttpClientModule,
  ],
  providers: [OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
