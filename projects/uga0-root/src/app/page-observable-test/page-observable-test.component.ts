import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

@Component({
  selector: 'app-page-observable-test',
  templateUrl: './page-observable-test.component.html',
  styleUrls: ['./page-observable-test.component.css']
})
export class PageObservableTestComponent implements OnInit {

  constructor(public container: UgPageContainerService) { }

  ngOnInit() {
  }


  close() {
    this.container.pageRemove();
  }

}
