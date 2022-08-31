import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; 
import { Order } from './models/order';
const getOrders = environment.urlback + 'orders/';
const pushOrder = environment.urlback + 'orders/';
const putOrder = environment.urlback + 'orders/';
const deleteOrder = environment.urlback + 'orders/';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { 
  }

  getOrders(): Promise<any> {
    return this.http.get(getOrders).toPromise()
  }

  addOrder(order:Order): Promise<any> {
    return this.http.post(pushOrder , order).toPromise();
  }

}
