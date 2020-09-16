import { GestureFacade } from '../../gesture-facade';
import { GestureStrategy } from './gesture-strategy';

export class GestureVertical implements GestureStrategy {
  static init(facade: GestureFacade) {
    let dragEvent: any;
    dragEvent = facade.event;
    for (const point of facade.points.values()) {
      dragEvent.startY = point.startY;
      break;
    }
  }
  static moving(facade: GestureFacade) {
    let dragEvent: any;
    dragEvent = facade.event;
    dragEvent.y = 0;
    let dy = 0;
    for (const point of facade.points.values()) {
      dy += point.y - point.preY;
    }
    dragEvent.dy = dy;
  }
  static end(facade: GestureFacade) {
    return;
  }
}
