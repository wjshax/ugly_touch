import { Injectable, Input } from '@angular/core';
import { UgLibTouchPoint as Point } from './ug-lib-touch-point';
import { UgLibTouchGesture as Gesture } from './ug-lib-touch-gesture.enum';

import { UgTouchDirectiveService } from './ug-touch-directive.service';
import { UgTouchEventsMapService } from './ug-touch-events-map.service';


// 计算器相关
import { GestureFacade } from './gesture-calculator/gesture-facade';
import { GestureCalculatorTemplate } from './gesture-calculator/gesture-calculator-template';

import { GestureCalculatorFactory } from './gesture-calculator/gesture-calculator-factory';
import { GestureCalculatorStrategyEnum } from './gesture-calculator/gesture-calculator-strategy.enum';

import { LoggerService } from '../lib/logger.service';
import { UgTouchLogService } from './ug-touch-log.service';


@Injectable()
export class UgServiceTouchService {
    // 点
    points: Map<number, Point>;

    // 计算器
    private GestureStrategy: GestureCalculatorStrategyEnum; // 手势判断策略
    gestureCalculatorFactory: GestureCalculatorFactory; // 依据策略生成计算器和计算上下文的工厂
    calculator: GestureCalculatorTemplate;
    calculatorFacade: GestureFacade;

    // 测试用
    cnt: number;
    error: string;
    deletedPoints: number[];

    constructor(private ugTouchEventsMapService: UgTouchEventsMapService,
        private logger: LoggerService,
        private touchLogger: UgTouchLogService,
    ) {
        this.points = new Map();
        this.GestureStrategy = GestureCalculatorStrategyEnum.default;
        this.gestureCalculatorFactory = new GestureCalculatorFactory();

        this.updateCalculator();
        this.updateCalculatorFacade();

        // 测试用
        this.deletedPoints = new Array();
        // console.log('Gesures:', Gesture.Unknown, typeof Gesture.Rotation, Gesture.Rotation.toString(),
        //     Gesture[Gesture.Rotation], typeof Gesture[Gesture.Rotation]);

    }

    @Input()
    set gestureStrategy(strategy: GestureCalculatorStrategyEnum) {
        this.GestureStrategy = strategy;

        this.updateCalculator();
        this.updateCalculatorFacade();
    }

    get gestureStrategy() {
        return this.GestureStrategy;
    }
    // 计算器
    updateCalculator() {
        this.calculator = this.gestureCalculatorFactory.getCalculator(this.GestureStrategy);
        // console.log('this.calculator:', this.calculator);
    }
    // 计算内容的facade
    updateCalculatorFacade() {
        this.calculatorFacade = this.gestureCalculatorFactory.getCalculatorFacade(this.GestureStrategy, this);
        this.calculatorFacade.setInit();
        this.calculatorFacade.setLogger(this.touchLogger);
        // console.log('this.calculatorFacade:', this.calculatorFacade);
    }


    regTouchById(touch: UgTouchDirectiveService, identifier: number) {
        const point = this.points.get(identifier);
        point.touches.push(touch);
    }

    getPointById(id: number): Point {
        return this.points.get(id);
    }

    checkPointById(id: number): boolean {
        if (this.points.has(id)) {
            return true;
        } else {
            return false;
        }
    }
    // 清除没有的点
    updateTouches(touches) {
        const idList = new Map();
        for (const touch of touches) {
            idList.set(touch.identifier, '');
        }
        for (const point of this.points.values()) {
            const id = point.id;
            if (!idList.has(id)) {
                this.ugTouchEventsMapService.delete(this.points.get(id).symbol);
                this.points.delete(id);
                this.deletedPoints.push(id);
            }
        }
        this.logout();
    }
    start(touches, timeStamp: number, root = false) {
        let symbol = null;
        for (const touch of touches) {
            const id = touch.identifier;
            if (!this.points.has(id)) {
                const p = new Point(touch, timeStamp);
                symbol = p.symbol;
                this.points.set(id, p);
                break;
            }
        }
        this.cnt = touches.length;
        if (this.cnt > 1) {
            this.error = 'changedTouches 超过1个点了！';
        }

        // 计算各个点
        if (root) {
            this.calculator.calculate(this.calculatorFacade);
        }

        this.logout();
        return symbol;
    }
    moving(touches, timeStamp: number) {
        for (const touch of touches) {
            const id = touch.identifier;
            if (this.points.has(id)) {
                const p = this.points.get(id);
                if (p.timeStamp !== timeStamp) {     // 通过timeStamp来确定这个点是不是最新的
                    p.move(touch, timeStamp);
                    p.lifeTime = timeStamp - p.timeStamp;
                }
            } else {
                console.warn('ug-lib-touch-error,touch-move: 没有这个点！', id);
            }
        }

        // 计算各个点
        this.calculator.calculate(this.calculatorFacade);

        this.logout();
        // console.log('points:', this.points);
    }
    end(touches, timeStamp: number) {
        for (const touch of touches) {
            const id = touch.identifier;
            if (this.points.has(id)) {
                const p = this.points.get(id);
                p.end(touch, timeStamp);

                this.ugTouchEventsMapService.delete(this.points.get(id).symbol);
                this.points.delete(id);

                if (this.points.values.length === 0) {
                    this.calculator.calculate(this.calculatorFacade);
                    // console.log('touch end');
                }
            } else {
                console.warn('ug-lib-touch-error,touch-end: 没有这个点！', id);
            }
        }

        // 计算各个点
        this.calculator.calculate(this.calculatorFacade);

        // console.log(touches);
        // this.logout();
        this.logger.clear();
    }

    logout() {
        this.logger.clear();
        this.logger.add(`cnt:${this.cnt}`);
        this.logger.add(`deleted points:${this.deletedPoints}`);
        this.logger.add(`facade.publicIndex:${this.calculatorFacade.publicIndex}`);
        for (const point of this.points.values()) {
            //             this.logger.add(`id:${point.id},x:${Math.round(point.x)},
            // y:${Math.round(point.y)},force:${Math.round(point.force * 1000)},rotation:${point.rotationAngle}`);
            this.logger.add(`id:${point.id},x:${Math.round(point.x)},
y:${Math.round(point.y)},lifeTime:${point.lifeTime}`);
            for (const touch of point.touches) {
                this.logger.add(`gesture:${touch.gestures}`);
                // console.log('touch.gestures:', touch.gestures, typeof touch.gestures);
            }
        }
    }

}
