import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    template: '',
  })

export abstract class  AbstractInput {
  @Input() set formGroup(formGroup: FormGroup) {
    this.fgInput = formGroup;
  }

  @Input() set formName(formName: string) {
    this.nameInput = formName;
  }

  @Input() set label(label: string) {
    this.labelInput = label;
  }

  labelInput: string = '';
  fgInput!: FormGroup;
  nameInput = '';

  constructor(){
    
  }

}