import {
  Component, OnInit, Input, Type, ViewChild, ComponentFactoryResolver, OnDestroy, HostBinding,
  Output, EventEmitter, AfterViewInit, AfterContentInit
} from '@angular/core';
import { UgPageHostDirective } from './ug-page-host.directive';
import { UgServiceTouchService } from '../../ug-lib-touch/ug-service-touch.service';
import { UgLibTouchGesture } from '../../ug-lib-touch/ug-lib-touch-gesture.enum';
import { UgPageContainerService } from '../ug-page-container/ug-page-container.service';
import { UgPageService } from './ug-page.service';

class Page {
  value: number;
  constructor(public component: Type<any>, public data: any) { }
}

@Component({
  selector: 'lib-ug-page',
  templateUrl: './ug-page.component.html',
  styleUrls: ['./ug-page.component.css'],
  providers: [UgPageHostDirective, UgServiceTouchService, UgPageService],
})
export class UgPageComponent implements OnInit, OnDestroy, AfterContentInit {
  value: number;
  @Input() page: Type<any>;
  @ViewChild(UgPageHostDirective, { static: true }) libUgPageHost: UgPageHostDirective;
  bgColors: string;
  isOpen: boolean;
  left: number;
  duration: string;
  UgLibTouchGesture = UgLibTouchGesture;

  constructor(
    private ugPageContainerService: UgPageContainerService,
    private componentFactoryResolver: ComponentFactoryResolver,
    public touchService: UgServiceTouchService,
    public ugPageService: UgPageService,
  ) {
    this.bgColors = this.bgColor();
    this.isOpen = true;
    this.left = 375;
  }

  ngOnInit() {
    // console.log('page Component', this);
    this.loadComponent();
    // this.left = 0;
    const This = this;
    setTimeout(() => {
      This.left = 0;
      This.duration = '0.4s';
    }, 50);
  }

  ngAfterContentInit() {
    // this.left = 0;
  }

  loadComponent() {
    const pageItem = new Page(this.page, { value: 0 });
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(pageItem.component);
    const viewContainerRef = this.libUgPageHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as UgPageComponent).value = pageItem.value;
  }

  pageTouched($event) {
    // console.log('page touched!', $event);
    if ($event.gesture === UgLibTouchGesture.Horizontal) {
      if ($event.eventStatus === 'Start') {
        // console.log('page x Started', $event);
      } else if ($event.eventStatus === 'Move') {
        // this.left = this.oldLeft + $event.dx;
        if (isNaN(this.left)) {
          console.log('this.left is NaN', this.left);
          this.left = 0;
        }
        this.duration = '0s';
        this.left += $event.dx;
        if (this.left < 0) {
          this.left = 0;
        }
      } else if ($event.eventStatus === 'End') {
        if (this.left > 100) {
          this.left = 375;
          this.duration = '0.4s';
          this.ugPageContainerService.pageRemove(50);
        } else {
          this.left = 0;
          this.duration = '0.3s';
        }
      } else {
        console.error('drag test error: 事件状态错误---', $event.eventStatus);
      }
      // console.log('page touched!', $event, this);
    } else if ($event.gesture === UgLibTouchGesture.Vertical) {

    }
  }

  ngOnDestroy() {
    console.log('ug-page-destroied');
  }

  randInt255() {
    return Math.round(Math.random() * 255);
  }

  bgColor() {
    return `rgb(${this.randInt255()},${this.randInt255()},${this.randInt255()})`;
  }
}
