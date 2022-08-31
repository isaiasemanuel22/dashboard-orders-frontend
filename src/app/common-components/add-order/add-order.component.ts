import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order } from 'src/app/resources/models/order';
import { OrdersService } from 'src/app/resources/orders.service';

@Component({
  selector: 'do-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  orderFg!:FormGroup;

  constructor(private fb: FormBuilder , private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.createFrom();
  }

  createFrom(){
   this.orderFg =  this.fb.group({
      name: [''],
      client: ['', Validators.required],
      description: ['', Validators.required],
      dateDelivery:[''],
      reserve:[false],
      cost:[''],
      amountReserve:['']
    })
  }
  save(){
    let date = new Date();
    let order:Order = {...this.orderFg.value};
    order.lastUpdate = date;
    order.dateAdmission = date;
    console.log(order);
    this.ordersService.addOrder(order).then(() => {
      console.log('se guardo con exito');
    }).catch(()=> {
      console.log('rompio por boludo');
    })
  }

}
