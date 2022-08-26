import { Injectable } from '@angular/core';
import { faBox, faHouse, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

export const routerNav = [
  {
    path: '',
    name: 'Productos',
    icon: faBox
  },
  {
    path: '',
    name: 'Home',
    icon: faHouse
  },

  {
    path: '',
    name: 'Clientes',
    icon: faUsersRectangle
  },

]

@Injectable({
  providedIn: 'root'
})
export class MenuRouterService {


  constructor() { }
}
