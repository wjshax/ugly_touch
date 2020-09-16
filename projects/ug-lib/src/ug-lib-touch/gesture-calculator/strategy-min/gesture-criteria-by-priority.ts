import { UgLibTouchGesture } from '../../ug-lib-touch-gesture.enum';
import { UgLibTouchPoint } from '../../ug-lib-touch-point';
import { GestureCriteria } from '../common/gesture-criteria/gesture-criteria';

export class GestureCriteriaByPriority implements GestureCriteria {
  meetCriteria(points: UgLibTouchPoint[], gestures: UgLibTouchGesture[]): UgLibTouchGesture[] {
    return gestures;
  }
}
