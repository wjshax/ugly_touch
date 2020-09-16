import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-bar',
  templateUrl: './scroll-bar.component.html',
  styleUrls: ['./scroll-bar.component.css']
})
export class ScrollBarComponent implements OnInit {
  @Input() vertical: boolean;
  @Input() percentage: number;
  @Input() start: number;
  constructor() {
    this.percentage = 100;
    this.start = 0;
    this.vertical = true;
  }

  ngOnInit() {
  }

}
