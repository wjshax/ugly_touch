import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UgLibService {

  windowMessageHandle: (e) => void;
  windowMessageHandleBinded: (e) => void;

  pageContainer: Array<any>;

  constructor() {
    this.windowMessageHandleBinded = this.windowMessageHandle.bind(this);
    window.addEventListener('message', this.windowMessageHandleBinded, false);
    console.log('UgLibService Inited');
    this.pageContainer = new Array();
  }

  regContainer(pageContainer) {
    this.pageContainer.push(pageContainer);
  }
  rmContainer() {
    this.pageContainer.pop();
  }
}


UgLibService.prototype.windowMessageHandle = windowMessageHandle;

function windowMessageHandle(e) {
  console.log('收到来自子页面的消息：', e, this);
  if (e.data.msg === 'woguanle') {
    this.pageContainer[this.pageContainer.length - 1].pageRemove();
  }

}
