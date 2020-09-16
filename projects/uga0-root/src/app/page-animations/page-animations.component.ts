import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

import {
  trigger,
  state,
  style,
  animate,
  transition,

  AnimationEvent,
} from '@angular/animations';

class Val {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}

@Component({
  selector: 'app-page-animations',
  templateUrl: './page-animations.component.html',
  styleUrls: ['./page-animations.component.css'],

  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
      transition('open <=> closed', [
        animate('0.5s')
      ]),
      transition('* => open', [
        animate('1s',
          style({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ]
})
export class PageAnimationsComponent implements OnInit {
  isOpen: boolean;
  trueFalse: boolean;
  a2Val: Val;
  a2Val2: Val;

  constructor(public container: UgPageContainerService) {
    this.a2Val = new Val(12);
    this.a2Val2 = new Val(24);
  }

  ngOnInit() {
    console.log('a2Val：', this.a2Val);
  }

  close() {
    this.container.pageRemove();
  }

  testHandle() {
    this.trueFalse = !this.trueFalse;
  }

  test1Toggle() {
    this.isOpen = !this.isOpen;
  }

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is start or done
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 or 1 second
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either open or closed
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either open or closed
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }

}
