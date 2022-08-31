import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './views/add-order/add-order.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'addOrder' , component:AddOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
