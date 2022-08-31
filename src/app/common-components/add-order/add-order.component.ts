import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Order } from 'src/app/resources/models/order';
import { OrdersService } from 'src/app/resources/orders.service';

@Component({
  selector: 'do-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {

  orderFg!:FormGroup;

  constructor(private fb: FormBuilder , private ordersService: OrdersService, private router: Router) { }

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

    if(this.orderFg.valid){
      let date = new Date();
      let order:Order = {...this.orderFg.value};
      order.lastUpdate = date;
      order.dateAdmission = date;
      this.ordersService.addOrder(order).then(() => {
        this.router.navigate(['']);
      }).catch(()=> {
        console.log('rompio por boludo');
      })
    }
    
    this.valid();
  }

  valid(){
    console.log(this.orderFg.get('client')!.errors);
   if(this.orderFg.get('client')!.errors!.required){
   }
  }

}
