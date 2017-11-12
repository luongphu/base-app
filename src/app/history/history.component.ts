import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'ons-page[history]',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private navi: OnsNavigator) { }

  ngOnInit() {
  }

  push() {
    this.navi.element.pushPage(MessageComponent);
  }
}
