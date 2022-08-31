import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/resources/models/order';
import { OrdersService} from '../../resources/orders.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  orders: Order[] = [];
  
  constructor(private OrdersService: OrdersService , private router: Router) { }

  ngOnInit(): void {
    this.OrdersService.getOrders().then((response)=> {
      this.orders = response;
      console.log(this.orders);
    });
  }

  addOrder(){
    this.router.navigate(['/addOrder'])
  }

}
