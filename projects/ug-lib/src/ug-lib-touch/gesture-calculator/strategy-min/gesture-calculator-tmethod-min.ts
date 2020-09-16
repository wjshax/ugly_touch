import { GestureCalculatorTemplate } from '../gesture-calculator-template';
import { FacadeMin } from './facade-min';

export class GestureCalculatorTmethodMin extends GestureCalculatorTemplate {
    constructor() {
        super(GestureCalculatorTmethodMin);
    }
    initGesture(facade: FacadeMin) {
        throw new Error('Method not implemented.');
    }
    gestureOnGoing(facade: FacadeMin) {
        throw new Error('Method not implemented.');
    }
    gestureEnded(facade: FacadeMin) {
        throw new Error('Method not implemented.');
    }
}
