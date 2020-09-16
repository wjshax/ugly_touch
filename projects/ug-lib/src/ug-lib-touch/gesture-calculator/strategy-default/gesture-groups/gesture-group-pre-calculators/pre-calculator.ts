import { TypePreCalculator } from './type-pre-calculator';
import { One } from './one';
import { Two } from './two';

export class PreCalculator {
  static one: TypePreCalculator;
  static two: TypePreCalculator;
  static getCalculator(group) {
    if (group === 'one') {
      return PreCalculator.one;
    } else if (group === 'two') {
      return PreCalculator.two;
    } else {
      console.error('GestureCalculatorTmethodDefault:PreCalculator--没有这个手势组的判断方法：' + group);
    }
  }
}
PreCalculator.one = One;
PreCalculator.two = Two;
