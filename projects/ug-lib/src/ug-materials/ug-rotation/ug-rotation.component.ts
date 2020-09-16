import { Component, OnInit, Input } from '@angular/core';

import { range } from '../../utils/utils';

@Component({
  selector: 'lib-ug-rotation',
  templateUrl: './ug-rotation.component.html',
  styleUrls: ['./ug-rotation.component.css']
})
export class UgRotationComponent implements OnInit {
  images: number[];
  range: any;

  @Input()
  cnt: number;

  constructor() {
    this.cnt = 5;


  }

  ngOnInit() {
  }
}

UgRotationComponent.prototype.range = range;
