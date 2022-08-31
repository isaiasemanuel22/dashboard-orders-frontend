import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ODButtonsModule } from './buttons/buttons.module';
import { OrdersFormsModule } from './forms/forms.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonComponentsModule,
    FontAwesomeModule,
    LayoutModule,
    HttpClientModule,
    ODButtonsModule,
    OrdersFormsModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ImportModule { }