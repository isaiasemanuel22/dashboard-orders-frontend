import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'do-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() btnClick: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnclick(){
    this.btnClick.emit(true);
  }
}
