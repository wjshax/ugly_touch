import { GestureFacade } from '../../gesture-facade';
import { GestureStrategy } from './gesture-strategy';
import { ZoomRotation } from '../../../event';
import { UgLibTouchPoint } from '../../../ug-lib-touch-point';
import { getDeg, getScale, getFocus } from './gesture-strategy-utils';

export class GestureZoomRotation implements GestureStrategy {
  static init(facade: GestureFacade) {
    let event: ZoomRotation;
    // event = facade.event;

  }
  static moving(facade: GestureFacade) {
    let pointA: UgLibTouchPoint;
    let pointB: UgLibTouchPoint;
    let others: UgLibTouchPoint[];
    let event: any;
    others = new Array();
    for (const point of facade.points.values()) {
      if (point.mark === 'A') {
        pointA = point;
      } else if (point.mark === 'B') {
        pointB = point;
      } else {
        others.push(point);
      }
    }
    if (pointA === undefined || pointB === undefined) {
      event = facade.event;
      event.dscale = 1;
      event.drotate = 0;
      event.dtop = 0;
      event.dleft = 0;
      return;
    }


    try {
      const deg = getDeg({ x: pointA.startX, y: pointA.startY },
        { x: pointB.startX, y: pointB.startY },
        { x: pointA.x, y: pointA.y },
        { x: pointB.x, y: pointB.y }
      );
    } catch (e) {
      facade.logger.add(`TAG3` + e);
    }
    const scale = getDeg({ x: pointA.startX, y: pointA.startY },
      { x: pointB.startX, y: pointB.startY },
      { x: pointA.x, y: pointA.y },
      { x: pointB.x, y: pointB.y }
    );
    const focus = getFocus({ x: pointA.startX, y: pointA.startY },
      { x: pointB.startX, y: pointB.startY },
      { x: pointA.x, y: pointA.y },
      { x: pointB.x, y: pointB.y });


    const dDeg = getDeg({ x: pointA.preX, y: pointA.preY },
      { x: pointB.preX, y: pointB.preY },
      { x: pointA.x, y: pointA.y },
      { x: pointB.x, y: pointB.y }
    );
    const dScale = getScale({ x: pointA.preX, y: pointA.preY },
      { x: pointB.preX, y: pointB.preY },
      { x: pointA.x, y: pointA.y },
      { x: pointB.x, y: pointB.y });

    const dfocus = getFocus({ x: pointA.preX, y: pointA.preY },
      { x: pointB.preX, y: pointB.preY },
      { x: pointA.x, y: pointA.y },
      { x: pointB.x, y: pointB.y });

    event = facade.event;
    event.dscale = dScale;
    event.drotate = dDeg;
    event.dtop = -1 * dfocus.y;
    event.dleft = -1 * dfocus.x;

    // facade.logger.add(`prex:${pointA.preX},${pointB.preX},prey:${pointA.preY},${pointB.preY},
    // x:${pointA.x},${pointB.x},y:${pointA.y},${pointB.y}`
    // );
    // facade.logger.add(`dDeg:${dDeg}`);
    // facade.logger.add(`dScale:${dScale}`);
    facade.logger.add(`dtop:${dfocus.x},dleft:${dfocus.y}`);
    // facade.logger.add(`dDeg:${dDeg},dscale:${dScale},dtop:${dfocus.y},dleft:${dfocus.x}`);
    // event = facade.event;
  }
  static end(facade: GestureFacade) {

  }

}
