import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {WebSocketService} from './websocket.service';
import {ChatObject} from './message/contents/chat.object';

@Injectable()
export class ChatService {

  private messages: Subject<ChatObject>;

  private chatUrl(roomNumber: string, name: string): string {
    return `ws://150.95.145.56:9000/chat/stream/${roomNumber}?user_name=${name}`;
  }

  constructor(private ws: WebSocketService) {
  }

  connect(roomNumber: string, name: string): Subject<ChatObject> {
    return this.messages = <Subject<ChatObject>>this.ws
      .connect(this.chatUrl(roomNumber, name))
      .map((response: MessageEvent): ChatObject => {
        const data = JSON.parse(response.data) as ChatObject;
        return data;
      });
  }

  send(name: string, message: string): void {
    this.messages.next(this.createMessage(name, message));
  }

  private createMessage(name: string, message: string): ChatObject {
    return new ChatObject(name, message, false);
  }

}
