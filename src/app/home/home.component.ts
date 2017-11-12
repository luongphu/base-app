import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'ons-page[home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private navi: OnsNavigator) { }

  ngOnInit() {}

  push() {
  	this.navi.element.pushPage(MessageComponent);
  }
}
