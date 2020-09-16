import { UgLibTouchGesture } from '../../../../ug-lib-touch-gesture.enum';
import { GestureFacade } from '../../../gesture-facade';

export type TypePreCalculator = (gestures: Map<UgLibTouchGesture, boolean>, facade: GestureFacade) => UgLibTouchGesture;
