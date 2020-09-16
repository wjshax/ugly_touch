import { UgLibTouchGesture } from '../../../ug-lib-touch-gesture.enum';
import { UgLibTouchPoint } from '../../../ug-lib-touch-point';

export interface GestureCriteria {
  meetCriteria(points: Map<any, any>, gestures: UgLibTouchGesture[]): UgLibTouchGesture[];
}
