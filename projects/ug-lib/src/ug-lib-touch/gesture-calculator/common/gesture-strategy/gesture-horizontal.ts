import { GestureFacade } from '../../gesture-facade';
import { GestureStrategy } from './gesture-strategy';
export class GestureHorizontal implements GestureStrategy {
  static init(facade: GestureFacade) {
    let dragEvent: any;
    dragEvent = facade.event;
    for (const point of facade.points.values()) {
      dragEvent.startX = point.startX;
      break;
    }
  }
  static moving(facade: GestureFacade) {
    let dragEvent: any;
    dragEvent = facade.event;
    dragEvent.x = 0;
    let dx = 0;
    for (const point of facade.points.values()) {
      dx += point.x - point.preX;
    }
    dragEvent.dx = dx;
  }
  static end(facade: GestureFacade) {
    return;
  }
}
