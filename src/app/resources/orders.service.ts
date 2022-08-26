import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'; 
const getOrders = environment.urlback;
const pushOrder = environment.urlback;
const putOrder = environment.urlback;
const deleteOrder = environment.urlback;
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { 
  }


  getOrders(): Promise<any> {
    let orders: any[] = [];
    return new Promise((resolve, reject) => {
      this.http.get(getOrders).toPromise().then(
        res => {
          console.log(res);
        }
      )
    })
  }

}
