import { Component, OnInit } from '@angular/core';
import { UgLibTouchGesture } from 'ug-lib';

@Component({
  selector: 'app-page-touch-e',
  templateUrl: './page-touch-e.component.html',
  styleUrls: ['./page-touch-e.component.css']
})
export class PageTouchEComponent implements OnInit {
  testImg = '/assets/imgs/test.jpg';
  UgLibTouchGesture = UgLibTouchGesture;
  top: number;
  left: number;
  rotate: number;
  scale: number;
  msgs: string[];
  delay: number;
  constructor() {
    this.top = 0;
    this.left = 0;
    this.rotate = 0;
    this.scale = 1;
    this.msgs = new Array();
    this.delay = 0;
  }

  ngOnInit() {
    this.msgs.push('test');
  }

  touchedZoomRotation($event) {
    if ($event.gesture === UgLibTouchGesture.ZoomRotation) {
      if ($event.eventStatus === 'Start') {
        this.msgs = new Array();
        this.msgs.push('started');
      } else if ($event.eventStatus === 'Move') {
        this.delay = 0;
        // this.ugTouchLogService.add('gesture:' + UgLibTouchGesture[$event.gesture] + ' ddeg:' + $event.drotate);

        this.rotate += $event.drotate;
        if (!isNaN($event.dscale)) {
          this.scale = this.scale * $event.dscale;
        }

        if (Math.abs($event.drotate) > 90) {
          this.msgs.push('$event.drotate:', $event.drotate);
        }

        this.top = this.top + $event.dtop;
        this.left = this.left + $event.dleft;
      } else if ($event.eventStatus === 'End') {
        this.top = 0;
        this.left = 0;
        this.rotate = 0;
        this.scale = 1;
        this.delay = 250;
      }
    }
  }

}
