import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ug-logger',
  templateUrl: './ug-logger.component.html',
  styleUrls: ['./ug-logger.component.css']
})
export class UgLoggerComponent implements OnInit {
  showInfo: true;
  showWarn: true;
  showError: true;
  constructor() { }

  ngOnInit() {
  }

}
