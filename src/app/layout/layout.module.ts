import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    ContentComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ButtonsModule
  ],
  exports: [
    ContentComponent,
    NavbarComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
