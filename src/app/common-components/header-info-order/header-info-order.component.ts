import { Component, Input, OnInit } from '@angular/core';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/resources/models/order';

@Component({
  selector: 'do-header-info',
  templateUrl: './header-info-order.component.html',
  styleUrls: ['./header-info-order.component.scss']
})
export class HeaderInfoOrderComponent implements OnInit {

  @Input() set order(order:Order){
    this.orderInput = order;
    this.name = this.orderInput.name!.toUpperCase();
    this.orderDelivery = this.getDate(this.orderInput.dateDelivery!);
    this.orderAdmission = this.getDate(this.orderInput.dateAdmission);
  }

  orderDelivery:string = '';
  orderAdmission:string = '';
  name = '';
  orderInput!:Order;
  angle = faAngleRight;
  icon = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

  getDate(date:Date):string{
    if(date != null){
      date = new Date(date);
      let dd = date.getDate();
      let mm = date.getMonth() + 1 ;
      let yyyy = date.getFullYear();
      return `${dd}/${mm}/${yyyy}`
    }
    return '';
  }

}
