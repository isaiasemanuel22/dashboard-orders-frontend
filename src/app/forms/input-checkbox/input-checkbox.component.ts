import { Component, OnInit } from '@angular/core';
import { AbstractInput } from '../abstract/abstract-input';

@Component({
  selector: 'do-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent extends AbstractInput implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
