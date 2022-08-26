import { Component, OnInit } from '@angular/core';
import { OrdersService} from '../../resources/orders.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private OrdersService: OrdersService) { }

  ngOnInit(): void {
    this.OrdersService.getOrders();
  }

}
