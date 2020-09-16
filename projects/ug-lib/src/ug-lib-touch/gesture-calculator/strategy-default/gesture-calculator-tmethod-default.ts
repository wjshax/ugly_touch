import { GestureCalculatorTemplate } from '../gesture-calculator-template';
import { FacadeDefault } from './facade-default';
import { getGesturePrePublicIndex } from '../common/gesture-pre-public-index';
import { PreCalculator } from './gesture-groups/gesture-group-pre-calculators/pre-calculator';

import { UgLibTouchGesture } from '../../ug-lib-touch-gesture.enum';

import { gesturePreTimeout } from '../common/index';
import { findGroup } from './gesture-groups/find-group-calculator';

export class GestureCalculatorTmethodDefault extends GestureCalculatorTemplate {
    constructor() {
        super(GestureCalculatorTmethodDefault);
    }
    initGesture(facade: FacadeDefault) {

        // 50ms 超时
        if (gesturePreTimeout(facade.points, 50) === false) {
            return;
        }

        // 计算公共index:这里应该先把公共的touch抽出来，免得后面用那么多的for
        facade.publicIndex = getGesturePrePublicIndex(facade.points);


        // 计算该策略下可用的手势，并将其转换为map
        const avaGestures = facade.gestureList;
        const avaGesturesMap = new Map();
        for (const gesture of avaGestures) {
            avaGesturesMap.set(gesture, false);
        }

        // 计算所有点中存在的手势
        for (const point of facade.points.values()) {
            for (const touch of point.touches) {
                for (const gesture of touch.gestures) {
                    if (avaGesturesMap.has(gesture)) {
                        avaGesturesMap.set(gesture, true);
                    } else {
                        console.error(`该策略：GestureCalculatorTmethodDefault，不存在手势:${gesture}`);
                    }
                }
            }
        }

        // 分组优先级
        const gestureGroupName = findGroup(facade, avaGesturesMap);


        const twoAndTouches = facade.twoAndTouches;

        if (twoAndTouches) {
            for (const touchAndIndex of twoAndTouches.values()) {
                facade.logger.add(`gesture:${touchAndIndex.touch.gestures},index:${touchAndIndex.index}`);
            }
        }


        const finalGesture = PreCalculator.getCalculator(gestureGroupName)(avaGesturesMap, facade);

        if (finalGesture === UgLibTouchGesture.Zoom
            || finalGesture === UgLibTouchGesture.Rotation
            || finalGesture === UgLibTouchGesture.ZoomRotation) {
            facade.logger.clear();

        }
        console.log('finalGesture', UgLibTouchGesture[finalGesture], finalGesture);


        // log
        const avaG = new Array();
        for (const gesture of avaGesturesMap.keys()) {
            if (avaGesturesMap.get(gesture) === true) {
                avaG.push(UgLibTouchGesture[gesture]);
            }
        }
        facade.logger.add(`Ava Gestures:${avaG}`);
        facade.logger.add(`FinalGesture:${UgLibTouchGesture[finalGesture]}`);



        if (finalGesture === undefined) {
            // 根据最后的手势确定
            return;
        }

        // 确定 手势了 可以 正式 开始 计算了
        facade.setGestureStrategy(finalGesture);
        facade.lockTouch(finalGesture);
        facade.initEvent(finalGesture);
        facade.gestureStrategy.init(facade);
        facade.emitEvent();
        facade.event.setMove();
        // console.log('locked ele:', facade.lockedTouch.showDirectiveEl(), UgLibTouchGesture[finalGesture], facade);
        facade.setMoving();
    }
    gestureOnGoing(facade: FacadeDefault) {
        if (facade.points.size > 0) {
            (facade.gestureStrategy).moving(facade);
            facade.emitEvent();
        } else {
            // console.warn('gestureOnGoing:setEnd');
            facade.setEnd();
            // this.calculate(facade);
        }
    }
    gestureEnded(facade: FacadeDefault) {
        (facade.gestureStrategy).end(facade);
        facade.event.setEnd();
        facade.emitEvent();
        facade.setInit();
    }
}
