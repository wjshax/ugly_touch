import { Component, OnInit } from '@angular/core';

import { UgPageContainerService } from 'ug-lib';

import { PageTouchTestComponent } from '../page-touch-test/page-touch-test.component';
import { PageWithPagesComponent } from '../page-with-pages/page-with-pages.component';
import { PageAindexComponent } from '../page-aindex/page-aindex.component';
import { PageObservableTestComponent } from '../page-observable-test/page-observable-test.component';
import { PageAnimationsComponent } from '../page-animations/page-animations.component';
import { PageAnimationsBComponent } from '../page-animations-b/page-animations-b.component';
import { PageTouchAComponent } from '../page-touch-a/page-touch-a.component';
import { PageTouchBComponent } from '../page-touch-b/page-touch-b.component';
import { PageTouchCComponent } from '../page-touch-c/page-touch-c.component';
import { PageTouchDComponent } from '../page-touch-d/page-touch-d.component';
import { PageTouchEComponent } from '../page-touch-e/page-touch-e.component';
import { PageTouchFComponent } from '../page-touch-f/page-touch-f.component';
import { PagePhotoAlbumComponent } from '../page-photo-album/page-photo-album.component';
import { PageInputViewportTestComponent } from '../page-input-viewport-test/page-input-viewport-test.component';
import { PageTouchGComponent } from '../page-touch-g/page-touch-g.component';

@Component({
  selector: 'app-page-index',
  templateUrl: './page-index.component.html',
  styleUrls: ['./page-index.component.css']
})
export class PageIndexComponent implements OnInit {
  height: number;
  width: number;
  constructor(public container: UgPageContainerService) {
    this.height = 0;
    this.width = 0;
  }

  ngOnInit() {
    // this.container.pageAdd(PagePhotoAlbumComponent);
    const body = document.getElementsByTagName('body')[0];
    const size = body.getBoundingClientRect();
    this.height = size.height;
    this.width = size.width;
  }

  pageStart(num: any) {
    // console.log('PageIndexComponent-pageStart:', num);
    if (num === 0) {
      this.container.pageAdd(PageTouchTestComponent);
    } else if (num === 1) {
      this.container.pageAdd(PageWithPagesComponent);
    } else if (num === 2) {
      this.container.pageAdd(PageAindexComponent);
    } else if (num === 3) {
      this.container.pageAdd(PageObservableTestComponent);
    } else if (num === 4) {
      this.container.pageAdd(PageAnimationsComponent);
    } else if (num === 5) {
      this.container.pageAdd(PageAnimationsBComponent);
    } else if (num === 6) {
      this.container.pageAdd(PageTouchAComponent);
    } else if (num === 7) {
      this.container.pageAdd(PageTouchBComponent);
    } else if (num === 8) {
      this.container.pageAdd(PageTouchCComponent);
    } else if (num === 9) {
      this.container.pageAdd(PageTouchDComponent);
    } else if (num === 10) {
      this.container.pageAdd(PageTouchEComponent);
    } else if (num === 11) {
      this.container.pageAdd(PageTouchFComponent);
    } else if (num === 12) {
      this.container.pageAdd(PagePhotoAlbumComponent);
    } else if (num === 13) {
      this.container.pageAdd(PageInputViewportTestComponent);
    } else if (num === 14) {
      this.container.pageAdd(PageTouchGComponent);
    }
  }
}
