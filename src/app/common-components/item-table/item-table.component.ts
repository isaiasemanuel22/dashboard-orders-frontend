import { Component, Input, OnInit } from '@angular/core';
import { faArrowRight, faCoffee, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Order } from 'src/app/resources/models/order';


@Component({
  selector: 'do-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  @Input() set order(order: Order) {
    this.orderInput = order;
  }
  
  orderInput!: Order;
  constructor() { }

  ngOnInit(): void {
  }

  angle = faAngleRight;
  icon = faArrowRight;


}
