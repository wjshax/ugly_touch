import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

import { PageIndexComponent } from './page-index/page-index.component';
import { PageTouchTestComponent } from './page-touch-test/page-touch-test.component';
import { PageUserComponent } from './page-user/page-user.component';
import { UgLibService } from 'ug-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UgPageContainerService]
})
export class AppComponent implements OnInit {
  title = 'uga0-root';
  constructor(public ugPageContainerService: UgPageContainerService, public ugLibService: UgLibService) {

  }
  ngOnInit() {
    this.ugPageContainerService.pageAdd(PageIndexComponent);
    // this.ugPageContainerService.pageAdd(PageUserComponent);
    // this.ugPageContainerService.pageAdd(PageTouchTestComponent);
  }


  pageInc() {
    console.log('page inc');
    // this.pageAdd(Math.random() < 0.5 ? TestPageComponent : TestPageBComponent);
  }
  pageDec() {
    console.log('page dec');
    // this.pageRemove();
  }

}
