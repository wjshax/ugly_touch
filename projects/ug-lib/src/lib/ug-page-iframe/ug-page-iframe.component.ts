import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ug-page-iframe',
  templateUrl: './ug-page-iframe.component.html',
  styleUrls: ['./ug-page-iframe.component.css']
})
export class UgPageIframeComponent implements OnInit {
  @Input() url: string;
  constructor() {
    // this.url = 'http://127.0.0.1:4202/';
  }

  ngOnInit() {
  }

  handleMsg($event) {
    console.log('got message from child document.', $event);
  }
}
