import { UgLibTouchGesture as Gesture } from '../../../ug-lib-touch-gesture.enum';
import { PSingleton } from '../../../../utils/pSingleton';
import { GestureStrategy } from './gesture-strategy';

import { GestureHorizontal } from './gesture-horizontal';
import { GestureRotation } from './gesture-rotation';
import { GestureVerhor } from './gesture-verhor';
import { GestureVertical } from './gesture-vertical';
import { GestureZoom } from './gesture-zoom';
import { GestureZoomRotation } from './gesture-zoom-rotation';

export class GestureStrategyFactory extends PSingleton {
  private strategyMap: Map<Gesture, GestureStrategy>;
  constructor() {
    super(GestureStrategyFactory);
    this.strategyMap = new Map();
    this.strategyMap.set(Gesture.Horizontal, GestureHorizontal);
    this.strategyMap.set(Gesture.Vertical, GestureVertical);
    this.strategyMap.set(Gesture.VerHor, GestureVerhor);
    this.strategyMap.set(Gesture.Zoom, GestureZoom);
    this.strategyMap.set(Gesture.ZoomRotation, GestureZoomRotation);
    this.strategyMap.set(Gesture.Rotation, GestureRotation);
  }
  build(gesture: Gesture) {
    return this.strategyMap.get(gesture);
  }
}
