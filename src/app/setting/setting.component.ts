import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';
import { ProfilesComponent } from '../profiles/profiles.component';

@Component({
  selector: 'ons-page[setting]',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  constructor(private navi: OnsNavigator, private params: Params) { }

  ngOnInit() {
  }

  editProfiles() {
  	this.navi.element.pushPage(ProfilesComponent);
  }
}
