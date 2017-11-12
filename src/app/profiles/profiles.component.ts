import * as ons from 'onsenui';
import { Component, OnInit, Input } from '@angular/core';
import { MessageComponent } from '../message/message.component';

const location_list = [
                  'Tokyo',
                  'Osaka',
                  'Nagoya',
                  'Cancel'
                ];

const language_list = [
                  'English',
                  'Japanese',
                  'Chinese',
                  'Korean',
                  'Cancel'
                ];

const tm_fee_list = [
                  'Share all',
                  'Treat all',
                  'Cancel'
                ];

const commission_list = [
                  'Free',
                  '500 Yen',
                  '1000 Yen',
                  '1500 Yen',
                  '2000 Yen',
                  '3000 Yen',
                  '5000 Yen',
                  '10000 Yen',
                  'Cancel'
                ];

@Component({
  selector: 'ons-page[profiles]',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {
  location:string = 'Tokyo';
  language:string = 'English';
  tm_fee:string = 'Self-payment';
  commission:string = '5000 Yen';

  constructor() { }

  ngOnInit() {
  }

  showLocationSheet() {
    ons.openActionSheet({
      cancelable: true,
      buttons: location_list,
    }).then(function(index){
      if(index < (location_list.length - 1)) this.location = location_list[index];
    }.bind(this));
  }

  showLanguageSheet() {
    ons.openActionSheet({
      cancelable: true,
      buttons: language_list,
    }).then(function(index){
      if(index < (language_list.length - 1)) this.language = language_list[index];
    }.bind(this));
  }

  showTmFeeSheet() {
    ons.openActionSheet({
      cancelable: true,
      buttons: tm_fee_list,
    }).then(function(index){
      if(index < (tm_fee_list.length - 1)) this.tm_fee = tm_fee_list[index];
    }.bind(this));
  }

  showCommissionSheet() {
    ons.openActionSheet({
      cancelable: true,
      buttons: commission_list,
    }).then(function(index){
      if(index < (commission_list.length - 1)) this.commission = commission_list[index];
    }.bind(this));
  }

  prompt() {
    ons.notification.prompt({
      message: 'What is the meaning of Life, the Universe and Everything?',
      callback: answer => {
        if (answer === '42') {
          ons.notification.alert({message: 'That\'s the correct answer!'});
        } else {
          ons.notification.alert({message: 'Incorrect! Please try again!'});
        }
      }
    });
  }
}
