import { Component, OnInit } from '@angular/core';
import { UgLibTouchGesture } from 'ug-lib';

@Component({
  selector: 'app-page-touch-g',
  templateUrl: './page-touch-g.component.html',
  styleUrls: ['./page-touch-g.component.css']
})
export class PageTouchGComponent implements OnInit {
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

  touchedZoom($event) {
    if ($event.gesture === UgLibTouchGesture.ZoomRotation) {
      if ($event.eventStatus === 'Start') {
        this.msgs = new Array();
        this.msgs.push('started');
      } else if ($event.eventStatus === 'Move') {
        this.delay = 0;
        if (!isNaN($event.dscale)) {
          this.scale = this.scale * $event.dscale;
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
