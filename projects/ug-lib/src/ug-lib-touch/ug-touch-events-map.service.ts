import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UgTouchEventsMapService {
  map: Map<symbol, { move: ((event: any) => {}), end: ((event: any) => {}) }>;
  constructor() {
    this.map = new Map();
  }
  set(symbol: symbol, handlers: { move: ((event: any) => {}), end: ((event: any) => {}) }) {
    this.map.set(symbol, handlers);
  }
  delete(symbol: symbol) {
    // 由于这里的事件都在document上，所以在删除点的时候统一移除
    console.error('UgTouchEventsMapService DELETED');
    const handlers = this.map.get(symbol);
    document.removeEventListener('touchmove', handlers.move);
    document.removeEventListener('touchend', handlers.end);
    this.map.delete(symbol);
  }
}
