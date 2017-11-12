import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule, OnsNavigator } from 'ngx-onsenui';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    OnsenModule
  ],
  providers: [OnsNavigator],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilesModule { }
