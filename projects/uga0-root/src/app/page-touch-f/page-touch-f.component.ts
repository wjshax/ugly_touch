import { Component, OnInit } from '@angular/core';
import { UgLibTouchGesture } from 'ug-lib';

@Component({
  selector: 'app-page-touch-f',
  templateUrl: './page-touch-f.component.html',
  styleUrls: ['./page-touch-f.component.css']
})
export class PageTouchFComponent implements OnInit {
  UgLibTouchGesture = UgLibTouchGesture;
  top: number;
  left: number;
  rotate: number;
  constructor() {
    this.top = 0;
    this.left = 0;
    this.rotate = 0;
  }

  ngOnInit() {
  }

  touchedRotation($event) {
    if ($event.gesture === UgLibTouchGesture.ZoomRotation) {
      if ($event.eventStatus === 'Start') {

      } else if ($event.eventStatus === 'Move') {
        // this.ugTouchLogService.add('gesture:' + UgLibTouchGesture[$event.gesture] + ' ddeg:' + $event.drotate);
        this.rotate = this.rotate + $event.drotate * 100 / 360 * 5;
        this.top = this.top + $event.dtop;
        this.left = this.left + $event.dleft;
      }
    }
  }

}
