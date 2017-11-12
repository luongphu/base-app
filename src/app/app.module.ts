import { OnsenModule } from 'ngx-onsenui';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {WebSocketService} from './websocket.service';
import {ChatService} from './chat.service';
import {ChatObject} from './message/contents/chat.object';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HistoryComponent } from './history/history.component';
import { SettingComponent } from './setting/setting.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MessageComponent } from './message/message.component';

import { AppService } from './app.service';

const components = [
  TabsComponent,
  HomeComponent,
  ScheduleComponent,
  HistoryComponent,
  SettingComponent,
  ProfilesComponent,
  MessageComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
  ],
  imports: [
    BrowserModule,
    OnsenModule
  ],
  providers: [AppService,WebSocketService,ChatService],
  bootstrap: [AppComponent],
  entryComponents: components,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
