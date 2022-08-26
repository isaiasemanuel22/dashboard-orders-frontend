import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { routerNav } from 'src/app/resoruces/menu-router.service';

@Component({
  selector: 'do-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigation = routerNav;

  constructor() { }

  ngOnInit(): void {
  }

}
