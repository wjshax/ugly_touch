import { Injectable } from '@angular/core';
import { UgLibTouchGesture } from './ug-lib-touch-gesture.enum';
import { TouchEvent } from './event';
import { UgLibTouchDirective } from './ug-lib-touch.directive';

@Injectable()
export class UgTouchDirectiveService {
  gestures: UgLibTouchGesture[];
  private inited = false;
  private directive: UgLibTouchDirective;
  length: number;
  constructor() { }

  init(directive) {
    if (this.inited) {
      console.error('UgTouchDirectiveService 初始化过了');
    } else {
      this.inited = true;
      this.directive = directive;
      this.gestures = directive.gestures;
    }
  }
  emitEvent(event: TouchEvent) {
    this.directive.emitEvent(event);
  }


  // 测试用
  showDirectiveEl() {
    return this.directive.showEl();
  }
}
