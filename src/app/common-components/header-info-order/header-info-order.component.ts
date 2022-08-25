import { Component, OnInit } from '@angular/core';
import { faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'do-header-info',
  templateUrl: './header-info-order.component.html',
  styleUrls: ['./header-info-order.component.scss']
})
export class HeaderInfoOrderComponent implements OnInit {

  angle = faAngleRight;
  icon = faArrowRight;

  constructor() { }

  ngOnInit(): void {
  }

}
