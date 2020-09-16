import { ErrorHandler } from '@angular/core';
import { TouchEvent, TouchEventFactory } from '../event';
import { UgLibTouchGesture } from '../ug-lib-touch-gesture.enum';
import { UgTouchDirectiveService } from '../ug-touch-directive.service';
import { GestureStrategy } from './common/gesture-strategy/gesture-strategy';
import { GestureStrategyFactory } from './common/gesture-strategy/gesture-strategy-factory';
import { UgLibTouchPoint } from '../ug-lib-touch-point';
import { UgServiceTouchService } from '../ug-service-touch.service';
import { UgTouchLogService } from '../ug-touch-log.service';

export abstract class GestureFacade {
  static INIT = 1;
  static MOVING = 2;
  static END = 3;
  private status = GestureFacade.INIT;
  event: TouchEvent;
  private eventFactory: TouchEventFactory;
  lockedTouch: UgTouchDirectiveService;
  gestureStrategy: any;


  points: Map<number, UgLibTouchPoint>;
  publicIndex: number;
  gestureList: UgLibTouchGesture[];

  // test
  logger: UgTouchLogService;

  constructor(touchService: UgServiceTouchService) {
    this.points = touchService.points;
    this.setInit();
  }

  getStatus() {
    return this.status;
  }
  setInit() {
    this.publicIndex = -1;
    this.eventFactory = new TouchEventFactory();
    this.status = GestureFacade.INIT;
  }
  setMoving() {
    this.status = GestureFacade.MOVING;
  }
  setEnd() {
    this.status = GestureFacade.END;
  }

  initEvent(gesture: UgLibTouchGesture) {
    this.event = this.eventFactory.createEvent(gesture);
  }
  emitEvent() {
    this.lockedTouch.emitEvent(this.event);
  }
  deinitEvent() {
    this.event = null;
  }

  setGestureStrategy(gesture: UgLibTouchGesture) {
    const factory = new GestureStrategyFactory();
    this.gestureStrategy = factory.build(gesture);
  }

  lockTouch(theGesture: UgLibTouchGesture) {
    for (const point of this.points.values()) {
      for (let i = 0; i < this.publicIndex * -1; i++) {
        const touch = point.touches[point.touches.length + this.publicIndex + i];
        for (const gesture of touch.gestures) {
          if (gesture === theGesture) {
            this.lockedTouch = touch;
            return;
          }
        }
      }
    }
  }

  unlockTouch(gesture: UgLibTouchGesture) {

  }
  clearGestureStrategy() {
    this.gestureStrategy = null;
  }



  // 测试用
  setLogger(logger: UgTouchLogService) {
    this.logger = logger;
  }
}
