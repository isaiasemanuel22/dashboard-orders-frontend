import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractInput } from '../abstract/abstract-input';

@Component({
  selector: 'do-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends AbstractInput implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
