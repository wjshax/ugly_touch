import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageCounterService {
  cnt: number;
  constructor() {
    this.cnt = 0;
  }

  getCnt() {
    this.cnt = this.cnt + 1;
    return this.cnt;
  }

}
