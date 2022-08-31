import { Component, OnInit } from '@angular/core';
import { AbstractInput } from '../abstract/abstract-input';

@Component({
  selector: 'do-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent extends AbstractInput implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
