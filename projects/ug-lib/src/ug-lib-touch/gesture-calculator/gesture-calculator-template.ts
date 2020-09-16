import { PSingleton } from '../../utils/pSingleton';
import { GestureFacade } from './gesture-facade';


export abstract class GestureCalculatorTemplate extends PSingleton {
    abstract initGesture(facade: GestureFacade);
    abstract gestureOnGoing(facade: GestureFacade);
    abstract gestureEnded(facade: GestureFacade);

    constructor(CLASS) {
        super(CLASS);
    }

    public calculate(facade: GestureFacade) {
        // 把计算放到后面一个周期去，免得数据没有计算完成就开始calculate了
        const promise = new Promise((resolve, reject) => {
            resolve();
        });
        promise.then(() => {
            // console.log('calculating...', facade.getStatus());
            if (facade.getStatus() === GestureFacade.INIT) {
                this.initGesture(facade);
            } else if (facade.getStatus() === GestureFacade.MOVING) {
                this.gestureOnGoing(facade);
            } else if (facade.getStatus() === GestureFacade.END) {
                this.gestureEnded(facade);
            } else {
                console.error('GestureCalculatorTemplate,ERROR:状态错误，无法设别的状态---' + facade.getStatus());
            }
        }
        );
    }
}
