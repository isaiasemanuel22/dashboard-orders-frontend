import { Component, OnInit } from '@angular/core';
import { routerNav } from 'src/app/resoruces/menu-router.service';

@Component({
  selector: 'do-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  navigation = routerNav;

  constructor() { }

  ngOnInit(): void {
  }

}
