import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';
import { UgLibTouchGesture } from 'ug-lib';

import { LoggerService } from 'ug-lib';

@Component({
  selector: 'app-page-touch-b',
  templateUrl: './page-touch-b.component.html',
  styleUrls: ['./page-touch-b.component.css']
})
export class PageTouchBComponent implements OnInit {
  oldLeft = 0;
  left = 0;
  oldTop = 0;
  top = 0;

  dragTop = 0;
  dragLeft = 0;
  dragTopOld = 0;
  dragLeftOld = 0;

  UgLibTouchGesture = UgLibTouchGesture;
  constructor(
    public container: UgPageContainerService,
    public logger: LoggerService,
  ) {

  }

  ngOnInit() {

  }

  close() {
    this.container.pageRemove();
  }

  touchedX($event) {
    if ($event.eventStatus === 'Start') {
      console.log('this.drag touchedX Started', $event);
      this.oldLeft = this.left;
    } else if ($event.eventStatus === 'Move') {
      // this.left = this.oldLeft + $event.dx;
      this.left += $event.dx;
    } else if ($event.eventStatus === 'End') {
      // this.left = this.oldLeft + $event.dx;
      this.left += $event.dx;
    } else {
      console.error('drag test error: 事件状态错误---', $event.eventStatus);
    }
  }
  touchedY($event) {
    if ($event.eventStatus === 'Start') {
      console.log('this.drag touchedY Started', $event);
      this.oldTop = this.top;
    } else if ($event.eventStatus === 'Move') {
      // this.top = this.oldTop + $event.dy;
      this.top += $event.dy;
    } else if ($event.eventStatus === 'End') {
      // this.top = this.oldTop + $event.dy;
      this.top += $event.dy;
    } else {
      console.error('drag test error: 事件状态错误---', $event.eventStatus);
    }
  }
  drag($event) {
    if ($event.eventStatus === 'Start') {
      console.log('this.drag Started', $event);
      this.dragTopOld = this.dragTop;
      this.dragLeftOld = this.dragLeft;
    } else if ($event.eventStatus === 'Move') {
      // this.dragTop = this.dragTopOld + $event.dy;
      // this.dragLeft = this.dragLeftOld + $event.dx;
      this.dragTop += $event.dy;
      this.dragLeft += $event.dx;

    } else if ($event.eventStatus === 'End') {
      console.log('this.drag Ended', $event);
      // this.dragTop = this.dragTopOld + $event.dy;
      // this.dragLeft = this.dragLeftOld + $event.dx;
      this.dragTop += $event.dy;
      this.dragLeft += $event.dx;

    } else {
      console.error('drag test error: 事件状态错误---', $event.eventStatus);
    }
  }
}
