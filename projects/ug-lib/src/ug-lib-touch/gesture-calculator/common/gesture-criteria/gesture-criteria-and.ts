import { UgLibTouchGesture } from '../../../ug-lib-touch-gesture.enum';
import { UgLibTouchPoint } from '../../../ug-lib-touch-point';
import { GestureCriteria } from './gesture-criteria';

export class GestureCriteriaAnd implements GestureCriteria {
  constructor(private gestureCriteriaA: GestureCriteria, private gestureCriteriaB: GestureCriteria) {

  }

  meetCriteria(points: Map<any, any>, gestures: UgLibTouchGesture[]): UgLibTouchGesture[] {
    return gestures;
  }
}
