import { Injectable } from '@angular/core';

import { Log, Logger } from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];
  constructor() { }
  add(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
  regLogger() {

  }

}
