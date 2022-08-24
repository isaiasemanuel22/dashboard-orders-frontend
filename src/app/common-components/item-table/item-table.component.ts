import { Component, OnInit } from '@angular/core';
import { faArrowRight, faCoffee , faAngleRight} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss']
})
export class ItemTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  angle = faAngleRight;
  icon = faArrowRight;

  
}
