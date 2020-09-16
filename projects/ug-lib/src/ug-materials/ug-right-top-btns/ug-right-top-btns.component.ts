import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { } from 'protractor';

@Component({
  selector: 'lib-ug-right-top-btns',
  templateUrl: './ug-right-top-btns.component.html',
  styleUrls: ['./ug-right-top-btns.component.css']
})
export class UgRightTopBtnsComponent implements OnInit {

  iconClose = '../../assets/icons/close.svg';
  iconMenu = '../../assets/icons/menu.svg';

  @Output() closed = new EventEmitter();
  @Output() menu = new EventEmitter();
  @Input() opacity: number;
  constructor() { }

  ngOnInit() {
  }

  closeD() {
    this.closed.emit();
  }

  menuPop() {
    this.menu.emit();
  }

}
