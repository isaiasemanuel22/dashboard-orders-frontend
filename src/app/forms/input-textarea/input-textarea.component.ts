import { Component, OnInit } from '@angular/core';
import { AbstractInput } from '../abstract/abstract-input';

@Component({
  selector: 'do-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent extends AbstractInput implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
