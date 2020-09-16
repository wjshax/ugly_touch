import { UgLibTouchGesture } from '../../../ug-lib-touch-gesture.enum';
import { UgLibTouchPoint } from '../../../ug-lib-touch-point';
import { GestureCriteria } from './gesture-criteria';

export class GestureCriteriaByTouches implements GestureCriteria {
  meetCriteria(points: Map<any, any>, gestures: UgLibTouchGesture[]): UgLibTouchGesture[] {
    return gestures;
  }
}
