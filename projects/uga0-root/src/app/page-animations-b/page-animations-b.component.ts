import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';
import { UgServiceTouchService } from 'ug-lib';
class Val {
  value: number;
  constructor(value: number) {
    this.value = value;
  }
}


@Component({
  selector: 'app-page-animations-b',
  templateUrl: './page-animations-b.component.html',
  styleUrls: ['./page-animations-b.component.css'],
  providers: [UgServiceTouchService],
})
export class PageAnimationsBComponent implements OnInit {

  a2Val: Val;
  duration: string;
  moving: string;
  constructor(public container: UgPageContainerService) {
    this.a2Val = new Val(12);
    this.duration = '0s';
    this.moving = 'no-moving';
  }

  ngOnInit() {
  }

  close() {
    this.container.pageRemove();
  }

  valueChanged() {
    console.log('value changed:', this.a2Val.value);
    this.moving = 'moving';
    this.duration = '1s';
    if (this.a2Val.value >= 50) {
      const diff = (100 - this.a2Val.value) / 50;
      this.a2Val.value = 100;
      this.duration = diff + 's';
    } else {
      const diff = this.a2Val.value / 50;
      this.a2Val.value = 0;
      this.duration = diff + 's';
    }
  }

  inputHandle() {
    this.duration = '0s';
    this.moving = 'no-moving';
    console.log('input handle:', this.a2Val.value);
  }
}
