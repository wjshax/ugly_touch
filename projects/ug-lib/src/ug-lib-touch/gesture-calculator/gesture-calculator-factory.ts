import { GestureCalculatorStrategyEnum } from './gesture-calculator-strategy.enum';
import { PSingleton } from '../../utils/pSingleton';

// 这里引入模板方法
import { GestureCalculatorTmethodDefault } from './strategy-default/gesture-calculator-tmethod-default';
import { GestureCalculatorTmethodMin } from './strategy-min/gesture-calculator-tmethod-min';

// 这里引入facade
import { FacadeDefault } from './strategy-default/facade-default';
import { FacadeMin } from './strategy-min/facade-min';

export class GestureCalculatorFactory extends PSingleton {


    // 这种把不同策略的方法放在对应的属性里面的方法不好~~~~
    // 不同策略的模板方法放在这里
    default = GestureCalculatorTmethodDefault;
    min = GestureCalculatorTmethodMin;

    // 不同的外观放在这里,加上Facade后缀
    defaultFacade = FacadeDefault;
    minFacade = FacadeMin;

    constructor() {
        super(GestureCalculatorFactory);
    }
    getCalculator(strategy: GestureCalculatorStrategyEnum) {
        const calculatorAttr = GestureCalculatorStrategyEnum[strategy];
        if (this[calculatorAttr] === undefined) {
            console.error('GestureCalculatorFactory：不能产生这个计算器，没有这个属性:' + calculatorAttr);
            return null;
        } else {
            return new this[calculatorAttr]();
        }
    }
    getCalculatorFacade(strategy: GestureCalculatorStrategyEnum, Context: any) {
        const facadeAttr = GestureCalculatorStrategyEnum[strategy] + 'Facade';
        if (this[facadeAttr] === undefined) {
            console.error('GestureCalculatorFactory：不能产生这个touch策略的facade，没有这个属性:' + facadeAttr);
            return null;
        } else {
            return new this[facadeAttr](Context);
        }
    }
}
