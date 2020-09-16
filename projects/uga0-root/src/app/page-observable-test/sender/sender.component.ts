import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {

  ranInt: number;

  constructor() {
    this.ranInt = this.randomInt();
  }

  randomInt() {
    return Math.round(Math.random() * 255);
  }

  ngOnInit() {
  }

  sendRandom() {
    this.ranInt = this.randomInt();
    console.log('send:', this.ranInt);
  }
}
