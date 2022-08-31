import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/resources/models/statusEnum';

@Component({
  selector: 'do-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {


  @Input() set status (status: Status| undefined) {
    this.status_value = status!;
  }

  status_value:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
