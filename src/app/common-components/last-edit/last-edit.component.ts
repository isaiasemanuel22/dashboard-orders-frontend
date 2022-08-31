import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'do-last-edit',
  templateUrl: './last-edit.component.html',
  styleUrls: ['./last-edit.component.scss']
})
export class LastEditComponent implements OnInit {

  @Input() set date(date:Date){
    if(date != null){
      this.dateInput = this.getDate(new Date(date));
    }
  }
  dateInput:string = '';
  constructor() { }
  ngOnInit(): void {
  }

  getDate(date:Date):string{
    let dd = date.getDate();
    let mm = date.getMonth() + 1 ;
    let yyyy = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    return `${dd}/${mm}/${yyyy} , ${hour}:${min}`
  }

}
