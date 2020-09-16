import { Injectable } from '@angular/core';
import { GestureCalculator } from './gesture-calculator/abandoned/gesture-calculator';

@Injectable({
  providedIn: 'root'
})
export class UgLibTouchInitService {

  constructor() {
    new GestureCalculator();
  }

}
