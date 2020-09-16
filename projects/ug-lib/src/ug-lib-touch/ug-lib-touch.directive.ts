import { Directive, ElementRef, HostListener, Input, Output, EventEmitter, Self, OnInit } from '@angular/core';
import { UgServiceTouchService } from './ug-service-touch.service';
import { UgTouchDirectiveService } from './ug-touch-directive.service';
import { UgLibTouchGesture } from './ug-lib-touch-gesture.enum';
import { UgTouchEventsMapService } from './ug-touch-events-map.service';
import { TouchEvent } from './event';

@Directive({
  selector: '[libUgLibTouch]',
  providers: [UgTouchDirectiveService]
})
export class UgLibTouchDirective implements OnInit {

  @Input() root: boolean;
  @Input() gestures: UgLibTouchGesture[];
  @Input() stop: boolean;
  @Output() touched = new EventEmitter<TouchEvent>();

  private el: HTMLElement;
  touchEnd: (event: any) => void;
  touchMove: (event: any) => void;

  constructor(
    el: ElementRef,
    public touchService: UgServiceTouchService,
    @Self() public touch: UgTouchDirectiveService,
    private ugTouchEventsMapService: UgTouchEventsMapService,
  ) {
    this.el = el.nativeElement;
    if (this.el.style !== undefined) {
      this.el.style.backgroundColor = this.bgColor();
    }
    this.gestures = [];
    this.stop = false;
    this.root = false; // 默认为 false
  }

  ngOnInit() {
    this.touch.init(this);
    // touch.regGestures(this.gestures);
    // console.log('directive gestures:', this.gestures, typeof this.gestures);
  }

  @HostListener('touchstart', ['$event']) onTouchStart($event) {
    if (this.stop === true) {
      $event.stopPropagation();
      return;
    }

    // console.log('UgLibTouchDirective:', this.root, this.root === true, this.el);
    // 阻止冒泡：如果不想这个touch事件接着冒泡，则将root设置为true
    if (this.root === true) {
      // console.log('UgLibTouchDirective:', this.root);
      $event.stopPropagation();
      // $event.preventDefault();
      // console.log('uglib-touchstart root', $event);
    }

    const id = $event.changedTouches[0].identifier;

    // 这里有错误
    // if ($event.currentTarget === $event.target) {
    //   this.handleNewPoint($event);
    // } else {
    //   if (this.root) {
    //     if (!this.touchService.checkPointById(id)) {
    //       this.handleNewPoint($event);
    //     }
    //   }
    // }

    if (this.touchService.getPointById(id) === undefined) {
      this.handleNewPoint($event);
    }

    this.touchService.regTouchById(this.touch, id); // 无论如何，都要将这个touch绑定到point上去
    {
      const touches = $event.touches; // $event.touches，现在的所有的点。
      this.touchService.updateTouches(touches); // 去除没用的点
    }

    // console.log('uglib-touchstart', this.el);
  }
  handleNewPoint($event) {
    let touches = $event.touches; // $event.touches，现在的所有的点。
    touches = $event.changedTouches; // 增加的点，应该只有一个
    const symbol = this.touchService.start(touches, $event.timeStamp, this.root); // 返回的是新增点的symbol

    // 增加touchmove和touchend事件
    const touchEndBinded = this.touchEnd.bind(this);
    const touchMoveBinded = this.touchMove.bind(this);

    document.addEventListener('touchmove', touchMoveBinded);
    document.addEventListener('touchend', touchEndBinded);

    // 将触摸点和事件绑定在一起
    this.ugTouchEventsMapService.set(symbol, { move: touchMoveBinded, end: touchEndBinded });
  }

  randInt255() {
    return Math.round(Math.random() * 255);
  }

  bgColor() {
    return `rgb(${this.randInt255()},${this.randInt255()},${this.randInt255()})`;
  }
  emitEvent(event: TouchEvent) {
    this.touched.emit(event);
  }


  showEl() {
    return this.el;
  }
}

function touchEnd(event) {
  // console.log('uglib-touchend', event.changedTouches[0]);
  let touches = event.changedTouches;
  this.touchService.end(touches, event.timeStamp);

  touches = event.touches;
  this.touchService.updateTouches(touches);

  // 由touch-events-map 统一管理
  // document.removeEventListener('touchmove', this.touchMoveBinded);
  // document.removeEventListener('touchend', this.touchEndBinded);
}

function touchMove(event) {
  {
    const touches = event.touches;
    this.touchService.moving(touches, event.timeStamp);
  }
  {
    const touches = event.touches;
    this.touchService.updateTouches(touches);
  }
}

UgLibTouchDirective.prototype.touchEnd = touchEnd;
UgLibTouchDirective.prototype.touchMove = touchMove;
