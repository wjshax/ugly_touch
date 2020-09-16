import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

import { PageTouchCFullPageComponent } from './page-touch-c-full-page/page-touch-c-full-page.component';

@Component({
  selector: 'app-page-touch-c',
  templateUrl: './page-touch-c.component.html',
  styleUrls: ['./page-touch-c.component.css']
})
export class PageTouchCComponent implements OnInit {

  constructor(private ugPageContainerService: UgPageContainerService) { }

  ngOnInit() {
  }

  openFullPage() {
    this.ugPageContainerService.pageAdd(PageTouchCFullPageComponent);
  }

  close() {
    this.ugPageContainerService.pageRemove();
  }

}
