import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

@Component({
  selector: 'app-page-aindex',
  templateUrl: './page-aindex.component.html',
  styleUrls: ['./page-aindex.component.css']
})
export class PageAindexComponent implements OnInit {

  imgScan = '/assets/icons/scan.svg';
  imgBar = '/assets/icons/bar-code.svg';
  imgPay = '/assets/icons/pay.svg';
  imgCard = '/assets/icons/cards.svg';
  iconTransfer = '/assets/icons/transfer.svg';

  looseHeight: number;

  constructor() {
    this.looseHeight = 0;
  }

  ngOnInit() {
  }

  onScrolling($event) {
    const scrollTop = $event.srcElement.scrollTop;
    console.log('on scrolling:', scrollTop);
    if(scrollTop === 0){

    }
  }

}
