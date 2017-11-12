import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'ons-page[schedule]',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(private navi: OnsNavigator, private params: Params) { }

  ngOnInit() {
  }

  push() {
  	this.navi.element.pushPage(MessageComponent);
  }

}
