import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/resources/models/order';

@Component({
  selector: 'do-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {



  @Input() set order(order:Order) {
    this.orderInput = order;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.mobile = event.target.innerWidth  <= 768;
  }
  
  mobile = window.innerWidth  <= 768;
  orderInput!:Order;
  constructor() { }

  ngOnInit(): void {
  }

}
