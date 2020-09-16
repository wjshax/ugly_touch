import { GestureFacade } from '../../gesture-facade';
import { GestureStrategy } from './gesture-strategy';
import { VerHor } from '../../../event';

export class GestureVerhor implements GestureStrategy {
  static init(facade: GestureFacade) {
    let dragEvent: any;
    dragEvent = facade.event;
    for (const point of facade.points.values()) {
      dragEvent.startX = point.startX;
      dragEvent.startY = point.startY;
      break;
    }
  }
  static moving(facade: GestureFacade) {
    let dragEvent: any;
    dragEvent = facade.event;
    dragEvent.x = 0;
    dragEvent.y = 0;
    let dx = 0;
    let dy = 0;
    for (const point of facade.points.values()) {
      dx += point.x - point.preX;
      dy += point.y - point.preY;
    }
    dragEvent.dx = dx;
    dragEvent.dy = dy;
  }
  static end(facade: GestureFacade) {
    return;
  }
}
