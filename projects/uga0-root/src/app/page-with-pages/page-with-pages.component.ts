import { Component, OnInit, SkipSelf } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';
import { PageUserComponent } from '../page-user/page-user.component';
@Component({
  selector: 'app-page-with-pages',
  templateUrl: './page-with-pages.component.html',
  styleUrls: ['./page-with-pages.component.css'],
  providers: [UgPageContainerService],
})
export class PageWithPagesComponent implements OnInit {

  constructor(public ugPageContainerService: UgPageContainerService,
              @SkipSelf() public ugPageContainerServiceParent: UgPageContainerService) { }

  ngOnInit() {
    this.ugPageContainerService.pageAdd(PageUserComponent);
    this.ugPageContainerService.pageAdd(PageUserComponent);
    this.ugPageContainerService.pageAdd(PageUserComponent);
    this.ugPageContainerService.pageAdd(PageUserComponent);
  }

  pageEmpty() {
    console.log('page container empty');
    this.ugPageContainerServiceParent.pageRemove();
  }
}
