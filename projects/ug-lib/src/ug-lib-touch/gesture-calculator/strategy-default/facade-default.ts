import { UgServiceTouchService } from '../../ug-service-touch.service';
import { GestureFacade } from '../gesture-facade';
import { UgLibTouchGesture as Gesture } from '../../ug-lib-touch-gesture.enum';
import { UgTouchDirectiveService } from '../../ug-touch-directive.service';

export class FacadeDefault extends GestureFacade {
    twoAndTouches: Map<Gesture, { touch: UgTouchDirectiveService, index: number }>;
    // 把需要的数据从touchService里面取出来
    constructor(touchService: UgServiceTouchService) {
        super(touchService);
        this.initGestures();
    }
    initGestures() {
        this.gestureList = [
            Gesture.Horizontal,
            Gesture.Vertical,
            Gesture.VerHor,
            Gesture.Zoom,
            Gesture.Rotation,
            Gesture.ZoomRotation
        ];
        return this.gestureList;
    }
}
