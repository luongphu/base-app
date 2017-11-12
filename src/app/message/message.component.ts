import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, Input } from '@angular/core';

import {ChatService} from '../chat.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'ons-page[message]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit,AfterViewInit {
  roomNumber: string;
  name: string;

  // for html
  @Input() messages: ChatModel[] = new Array();

  @ViewChild('content') private content: ElementRef;

  constructor(private chatService: ChatService) {
  	addEventListener('native.keyboardshow', (e) => {
      setTimeout(() => {
        this.scrollToBottom();
      }, 200);
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  send(message: string): void {
    this.chatService.send(
      this.name, message
    );
  }

  ngOnInit() {
    this.roomNumber = "999";
    this.name = "hiroshi";

    this.chatService.connect(this.roomNumber, this.name).subscribe(msg => {

      const isMe = msg.userName === this.name;

      this.messages.push(new ChatModel(
        msg.userName,
        msg.text,
        msg.systemFlag,
        {
          me: isMe,
          someone: !isMe
        },
        this.color6(msg.userName)
      ));

      console.log(this.messages);
    });
  }

  private color6(key: string): string {
    const hash6 = Md5.hashStr(encodeURIComponent(key)).toString().slice(6, 12);
    const rgb = parseInt(hash6, 16) % 1000000;
    return ('000000' + rgb).slice(-6);
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.nativeElement.scrollTop = this.content.nativeElement.scrollHeight;
    });
  }

}

class ChatModel {

  userName: string;
  text: string;
  systemFlag: boolean;
  speaker: {};
  faceColor: string;

  constructor(userName: string, text: string, systemFlag: boolean, speaker: {}, faceColor: string) {
    this.userName = userName;
    this.text = text;
    this.systemFlag = systemFlag;
    this.speaker = speaker;
    this.faceColor = faceColor;
  }
}
