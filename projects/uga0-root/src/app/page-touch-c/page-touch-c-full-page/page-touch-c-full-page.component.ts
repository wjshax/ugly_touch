import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

@Component({
  selector: 'app-page-touch-c-full-page',
  templateUrl: './page-touch-c-full-page.component.html',
  styleUrls: ['./page-touch-c-full-page.component.css']
})
export class PageTouchCFullPageComponent implements OnInit {

  constructor(private ugPageContainerService: UgPageContainerService) { }

  ngOnInit() {
  }

  close() {
    this.ugPageContainerService.pageRemove();
  }
}
