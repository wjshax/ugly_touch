import { UgLibTouchPoint } from '../../ug-lib-touch-point';

export function getGesturePrePublicIndex(points: Map<number, UgLibTouchPoint>): number {
  let index = 0;
  const pointTouchesCntList = new Array();
  for (const point of points.values()) {
    pointTouchesCntList.push(point.touches.length);
  }
  const minTouchesCnt = Math.min(...pointTouchesCntList);
  for (let i = 0; i < minTouchesCnt; i++) {
    let touch = null;
    for (const point of points.values()) {
      if (touch === null) {
        touch = point.touches[point.touches.length - 1 - i];
      } else {
        if (touch !== point.touches[point.touches.length - 1 - i]) {
          return index;
        }
      }
    }
    index -= 1;
  }
  return index;
}
