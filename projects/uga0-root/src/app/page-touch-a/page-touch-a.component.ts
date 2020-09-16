import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';


@Component({
  selector: 'app-page-touch-a',
  templateUrl: './page-touch-a.component.html',
  styleUrls: ['./page-touch-a.component.css']
})
export class PageTouchAComponent implements OnInit {
  msgList: string[];
  touchList: any[];
  constructor(public container: UgPageContainerService) {
    this.msgList = new Array();
    this.touchList = new Array();
  }

  msgPut(msg: string) {
    this.msgList.push(msg);
  }

  touchStart($event) {
    this.msgPut('touch start,len:' + $event.touches.length + ' id:' + $event.changedTouches[0].identifier);
    for (const touch of $event.touches) {
      this.touchList.push({identifier: touch.identifier});
    }
    console.log($event);
  }

  touchEnd($event) {
    this.msgPut('touch end,len:' + $event.touches.length + ' id:' + $event.changedTouches[0].identifier);
    console.log($event);
  }

  ngOnInit() {
  }

  close() {
    this.container.pageRemove();
  }

}
