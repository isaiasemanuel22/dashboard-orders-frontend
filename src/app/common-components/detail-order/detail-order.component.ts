import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.scss']
})
export class DetailOrderComponent implements OnInit {

  mobile = window.innerWidth  <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.mobile = event.target.innerWidth  <= 768;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
