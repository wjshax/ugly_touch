import { GestureFacade } from '../../gesture-facade';
import { GestureStrategy } from './gesture-strategy';
import { Zoom } from '../../../event';
import { UgLibTouchPoint } from '../../../ug-lib-touch-point';
import { getDeg, getScale, getFocus } from './gesture-strategy-utils';

export class GestureZoom implements GestureStrategy {
  static init(facade: GestureFacade) {
    let event: any;
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
      event.dscale = 0;
      event.drotate = 0;
      event.dtop = 0;
      event.dleft = 0;
    }

    const deg = getDeg({ x: pointA.startX, y: pointA.startY },
      { x: pointB.startX, y: pointB.startY },
      { x: pointB.x, y: pointB.y },
      { x: pointB.x, y: pointB.y }
    );

    const scale = getDeg({ x: pointA.startX, y: pointA.startY },
      { x: pointB.startX, y: pointB.startY },
      { x: pointB.x, y: pointB.y },
      { x: pointB.x, y: pointB.y }
    );

    const focus = getFocus({ x: pointA.startX, y: pointA.startY },
      { x: pointB.startX, y: pointB.startY },
      { x: pointB.x, y: pointB.y },
      { x: pointB.x, y: pointB.y });

    const dDeg = getDeg({ x: pointA.preX, y: pointA.preY },
      { x: pointB.preX, y: pointB.preY },
      { x: pointB.x, y: pointB.y },
      { x: pointB.x, y: pointB.y }
    );

    const dScale = getScale({ x: pointA.preX, y: pointA.preY },
      { x: pointB.preX, y: pointB.preY },
      { x: pointB.x, y: pointB.y },
      { x: pointB.x, y: pointB.y });

    const dfocus = getFocus({ x: pointA.preX, y: pointA.preY },
      { x: pointB.preX, y: pointB.preY },
      { x: pointB.x, y: pointB.y },
      { x: pointB.x, y: pointB.y });

    event = facade.event;
    event.dscale = dScale;
    event.drotate = dDeg;
    event.dtop = dfocus.y;
    event.dleft = dfocus.x;
  }
  static end(facade: GestureFacade) {

  }
}
