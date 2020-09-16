import { UgTouchDirectiveService as Touch } from './ug-touch-directive.service';

export class UgLibTouchPoint {
    id: number;
    symbol: symbol;
    touches: Touch[];
    mark: any;
    flag: string;

    timeStamp: number;
    lifeTime: number;

    // 源touch事件的数据
    screenX: number;
    screenY: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    radiusX: number;
    radiusY: number;
    rotationAngle: 0;
    force: number;

    startX: number;
    startY: number;
    endX: number;
    endY: number;
    x: number;
    y: number;
    dt: number;
    preX: number;
    preY: number;
    preT: number;
    vX: number;
    vY: number;


    constructor(pos, timeStamp: number) {
        this.setStart(pos, timeStamp);
        this.symbol = Symbol();
        this.touches = new Array();
        this.mark = undefined;
    }

    setStart(pos, timeStamp: number) {
        this.timeStamp = timeStamp;
        this.flag = 'start';
        this.copyPos(pos);
        const x = pos.screenX;
        const y = pos.screenY;
        this.id = pos.identifier;
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.preX = x;
        this.preY = y;
    }

    end(pos, timeStamp: number) {
        this.flag = 'end';
        this.lifeTime = timeStamp - this.timeStamp;
        this.copyPos(pos);
        const x = pos.screenX;
        const y = pos.screenY;
        this.preX = this.x;
        this.preY = this.y;
        this.endX = x;
        this.endY = y;
        this.x = x;
        this.y = y;
    }

    move(pos, timeStamp: number) {
        this.flag = 'move';

        this.lifeTime = timeStamp - this.timeStamp;
        // console.log('point.lifeTime:', timeStamp, this.lifeTime, this.timeStamp);
        this.copyPos(pos);
        const x = pos.screenX;
        const y = pos.screenY;
        this.preX = this.x;
        this.preY = this.y;
        this.endX = x;
        this.endY = y;
        this.x = x;
        this.y = y;
    }

    copyPos(pos) {

        this.screenX = pos.screenX;
        this.screenY = pos.screenY;
        this.clientX = pos.clientX;
        this.clientY = pos.clientY;
        this.pageX = pos.pageX;
        this.pageY = pos.pageY;
        this.radiusX = pos.radiusX;
        this.radiusY = pos.radiusY;
        this.rotationAngle = pos.rotationAngle;
        this.force = pos.force;
    }
}
