import { Component, OnInit } from '@angular/core';
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'do-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icon = faCartFlatbed;
  constructor() { }

  ngOnInit(): void {
  }

}
