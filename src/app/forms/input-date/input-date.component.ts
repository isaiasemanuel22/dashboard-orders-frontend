import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractInput } from '../abstract/abstract-input';

@Component({
  selector: 'do-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent extends AbstractInput implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
