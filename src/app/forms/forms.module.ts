import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ODButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    InputTextComponent,
    InputDateComponent,
    InputCheckboxComponent,
    InputTextareaComponent,
    InputNumberComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ODButtonsModule
  ],
  exports: [
    InputTextComponent,
    InputDateComponent,
    InputCheckboxComponent,
    InputTextareaComponent,
    InputNumberComponent,
    FormComponent,

  ]
})
export class OrdersFormsModule { }
