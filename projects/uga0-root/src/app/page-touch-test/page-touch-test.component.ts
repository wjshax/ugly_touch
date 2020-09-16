import { Component, OnInit } from '@angular/core';

import { UgPageContainerService } from 'ug-lib';

@Component({
  selector: 'app-page-touch-test',
  templateUrl: './page-touch-test.component.html',
  styleUrls: ['./page-touch-test.component.css']
})
export class PageTouchTestComponent implements OnInit {

  constructor(public container: UgPageContainerService) { }

  ngOnInit() {
  }

  close() {
    this.container.pageRemove();
  }
}
