import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'do-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {


  @Input() set status (status: string) {
    this.status_value = status;
  }

  status_value:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
