import { Component, OnInit, Type, Output, EventEmitter, Input } from '@angular/core';
import { UgPageHostDirective } from '../ug-page/ug-page-host.directive';
import { UgPageContainerService } from './ug-page-container.service';

interface Page {
  page: Type<any>;
  left: number;
}

@Component({
  selector: 'lib-ug-page-container',
  templateUrl: './ug-page-container.component.html',
  styleUrls: ['./ug-page-container.component.css'],
  providers: [UgPageHostDirective],
})
export class UgPageContainerComponent implements OnInit {
  @Output() empty = new EventEmitter<boolean>();
  pageList: Page[];
  duration: string;
  constructor(public ugPageConotainerService: UgPageContainerService) {
    this.pageList = [];
    ugPageConotainerService.regContainer(this);
  }
  ngOnInit() {
    // this.loadComponent();
    // console.log('UgPageContainerComponent', this, this.pageList);

  }

  pageAdd(page) {
    this.pageList.push(
      { page, left: 375 }
    );

    const This = this;
    setTimeout(() => {
      this.duration = '0.4s';
      for (let i = 0; i < This.pageList.length; i++) {
        if (i === This.pageList.length - 1) {
          This.pageList[i].left = 0;
        } else {
          This.pageList[i].left = -375 / 2;
        }
      }
    }, 50);
  }

  pageRemove(delay = 50) {
    this.pageList.pop();
    if (this.pageList.length === 0) {
      this.empty.emit(true);
    } else {
      setTimeout((This) => {
        this.duration = '0.4s';
        This.pageList[This.pageList.length - 1].left = 0;
      }, delay, this);
    }
  }
}
