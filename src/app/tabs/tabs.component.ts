import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ScheduleComponent } from '../schedule/schedule.component';
import { HistoryComponent } from '../history/history.component';
import { SettingComponent } from '../setting/setting.component';
import { AppService } from '../app.service';

@Component({
  selector: 'ons-page[tabs]',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  home = HomeComponent;
  schedule = ScheduleComponent;
  history = HistoryComponent;
  setting = SettingComponent;

  // (1) @ViewChild を使って ons-tabbar 要素の ElementRef を取得する
  @ViewChild('tabbar') tabbarElementRef: ElementRef;

  constructor(private _service: AppService) {
    // (2) service を使って (1) の ElementRef に別のコンポーネントからもアクセスできるようにする
    this._service.tabsComponent = this;
  }

  ngOnInit() {
  }
}
