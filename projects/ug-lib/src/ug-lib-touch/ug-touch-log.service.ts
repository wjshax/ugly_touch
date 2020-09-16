import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UgTouchLogService {
  msgs: string[];
  constructor(

  ) {
    this.msgs = new Array();
    this.msgs.push('msg1');
    this.msgs.push('msg2');
    this.msgs.push('msg3');
    this.msgs.push('msg4');
    this.msgs.push('msg1');
    this.msgs.push('msg2');
    this.msgs.push('msg3');
    this.msgs.push('msg4');
    this.msgs.push('msg1');
    this.msgs.push('msg2');
    this.msgs.push('msg3');
    this.msgs.push('msg4');
    this.msgs.push('msg1');
    this.msgs.push('msg2');
    this.msgs.push('msg3');
    this.msgs.push('msg4');
  }

  add(msg) {
    this.msgs.push(msg);
  }
  clear() {
    this.msgs = new Array();
  }
}
