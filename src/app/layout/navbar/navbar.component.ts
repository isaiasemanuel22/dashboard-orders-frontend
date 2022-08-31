import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { routerNav } from 'src/app/resoruces/menu-router.service';

@Component({
  selector: 'do-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navigation = routerNav;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigate(path:string){
    this.router.navigate([path]);
  }
}
