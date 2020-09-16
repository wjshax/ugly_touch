import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';
import { UgLibTouchGesture } from 'ug-lib';
import { UgTouchLogService } from 'ug-lib';

@Component({
  selector: 'app-page-touch-d',
  templateUrl: './page-touch-d.component.html',
  styleUrls: ['./page-touch-d.component.css']
})
export class PageTouchDComponent implements OnInit {
  UgLibTouchGesture = UgLibTouchGesture;
  rtop: number;
  rleft: number;
  rrotate: number;

  top: number;
  left: number;
  width: number;
  height: number;
  rotate: number;
  constructor(private ugPageContainerService: UgPageContainerService, public ugTouchLogService: UgTouchLogService) {
    this.top = 0;
    this.left = 0;
    this.width = 200;
    this.height = 200;
    this.rotate = 25;

    this.rtop = 0;
    this.rleft = 0;
    this.rrotate = 0;
  }

  ngOnInit() {
  }
  touchedZoomRotation($event) {
    if ($event.gesture === UgLibTouchGesture.ZoomRotation) {
      if ($event.eventStatus === 'Start') {
        this.ugTouchLogService.add('$event.eventStatus:' + $event.eventStatus + ' gesture:' + UgLibTouchGesture[$event.gesture]);
      } else if ($event.eventStatus === 'Move') {
        // this.ugTouchLogService.add('gesture:' + UgLibTouchGesture[$event.gesture] + ' ddeg:' + $event.drotate);
        this.rotate = this.rotate + $event.drotate * 100 / 360;
        if (!isNaN($event.dscale)) {
          this.width = this.width * $event.dscale;
          this.height = this.height * $event.dscale;
        }

        if (this.width > 300) { this.width = 300; }
        if (this.height > 300) { this.height = 300; }
        if (this.width < 100) { this.width = 150; }
        if (this.height < 100) { this.height = 150; }

        this.top = this.top + $event.dtop;
        this.left = this.left + $event.dleft;

        this.ugTouchLogService.add(`width:${this.width},height:${this.height}`);

      }
    } else if ($event.gesture === UgLibTouchGesture.Rotation) {
      if ($event.eventStatus === 'Start') {
        this.ugTouchLogService.add('$event.eventStatus:' + $event.eventStatus + ' gesture:' + UgLibTouchGesture[$event.gesture]);
      } else if ($event.eventStatus === 'Move') {
        this.ugTouchLogService.add('$event.eventStatus:' + $event.eventStatus + ' gesture:' + UgLibTouchGesture[$event.gesture]);
      }
    }
  }
  close() {
    this.ugPageContainerService.pageRemove();
  }
}
