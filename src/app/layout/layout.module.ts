import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ODButtonsModule } from '../buttons/buttons.module';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    ContentComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ODButtonsModule
  ],
  exports: [
    ContentComponent,
    NavbarComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class LayoutModule { }
