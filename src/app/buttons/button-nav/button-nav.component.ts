import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'do-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent implements OnInit {

  @Input() set title(title:string){
    this.titleNav = title;
  }

  titleNav:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
