import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';
import { PageCounterService } from './page-counter.service';

@Component({
  selector: 'app-page-user',
  templateUrl: './page-user.component.html',
  styleUrls: ['./page-user.component.css'],
})
export class PageUserComponent implements OnInit {
  cnt: number;
  constructor(public ugPageContainerService: UgPageContainerService, public pageCounterService: PageCounterService) { }

  ngOnInit() {
    this.cnt = this.pageCounterService.getCnt();
  }

  close() {
    this.ugPageContainerService.pageRemove();
  }

  pageClose() {
    console.log('page close');
    this.ugPageContainerService.pageRemove();
  }
  menuPop() {
    console.log('menu pop');
  }
}
