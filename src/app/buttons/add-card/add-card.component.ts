import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'do-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  icon = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
