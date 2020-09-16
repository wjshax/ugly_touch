import { PSingleton } from '../utils/pSingleton';
import { UgLibTouchGesture as Gesture } from './ug-lib-touch-gesture.enum';
import { deepClone } from '../utils/utils';


export class TouchEvent {
    eventStatus: string;
    // This: this;
    constructor(public gesture: Gesture) {
        this.eventStatus = 'Start';
    }
    getGesture() {
        return Gesture[this.gesture];
    }
    setMove() {
        this.eventStatus = 'Move';
    }
    setEnd() {
        this.eventStatus = 'End';
    }
    clone() {
        return this;
        // return deepClone(this);
    }
}

export class Vertical extends TouchEvent {
    constructor() {
        super(Gesture.Vertical);
    }
    startX: number;
    x: number;
    dx: number;
}

export class Horizontal extends TouchEvent {
    constructor() {
        super(Gesture.Horizontal);
    }
    startY: number;
    y: number;
    dy: number;
}

export class VerHor extends TouchEvent {
    constructor() {
        super(Gesture.Horizontal);
    }
    startX: number;
    x: number;
    dx: number;
    startY: number;
    y: number;
    dy: number;
}

export class Zoom extends TouchEvent {
    constructor() {
        super(Gesture.Zoom);
    }
    top: number;
    left: number;
    scale: number;

    dtop: number;
    dleft: number;
    dscale: number;
}

export class Rotation extends TouchEvent {
    constructor() {
        super(Gesture.Rotation);
    }
    top: number;
    left: number;
    rotate: number;

    dtop: number;
    dleft: number;
    drotate: number;
}

export class ZoomRotation extends TouchEvent {
    constructor() {
        super(Gesture.ZoomRotation);
    }

    top: number;
    left: number;
    rotate: number;
    scale: number;

    dtop: number;
    dleft: number;
    drotate: number;
    dscale: number;
}

export class TouchEventFactory extends PSingleton {
    Vertical = Vertical;
    Horizontal = Horizontal;
    VerHor = VerHor;
    private eventMap: Map<Gesture, any>;
    constructor() {
        super(TouchEventFactory);
        this.eventMap = new Map()
            .set(Gesture.Horizontal, Horizontal)
            .set(Gesture.Vertical, Vertical)
            .set(Gesture.VerHor, VerHor)
            .set(Gesture.Zoom, Zoom)
            .set(Gesture.Rotation, Rotation)
            .set(Gesture.ZoomRotation, ZoomRotation);
    }
    createEvent(gesture: Gesture) {
        const event = this.eventMap.get(gesture);
        if (event === undefined) {
            console.error('TouchEventFactory Error：没有这个手势的事件。手势：' + gesture);
            return undefined;
        }
        return new event();
    }
}
