import { UgLibTouchGesture } from '../../../../ug-lib-touch-gesture.enum';
import { GestureFacade } from '../../../gesture-facade';

export function One(gestures: Map<UgLibTouchGesture, boolean>, facade: GestureFacade): UgLibTouchGesture {
  // 只有一个手势，就不需要判断了
  if (gestures.size <= 1) {
    return gestures.keys[0];
  }

  // 判断横竖
  let oldestPoint = null;
  // 将最老的提出来，判断是横向还是纵向
  for (const point of facade.points.values()) {
    if (oldestPoint === null) {
      oldestPoint = point;
    } else {
      if (point.lifeTime > oldestPoint.lifeTime) {
        oldestPoint = point;
      }
    }
  }

  // 判断是否有drag：只能是最顶层的有效
  if (gestures.has(UgLibTouchGesture.VerHor)) {

    // 获取顶层touch的gestures
    const topGestures = oldestPoint.touches[oldestPoint.touches.length + facade.publicIndex].gestures;
    // console.log('gestures.has(UgLibTouchGesture.VerHor)', topGestures);
    for (const gesture of topGestures) {
      if (gesture === UgLibTouchGesture.VerHor) {
        return UgLibTouchGesture.VerHor;
      }
    }
  }

  let dx = oldestPoint.x - oldestPoint.startX;
  dx = dx < 0 ? -1 * dx : dx;
  let dy = oldestPoint.y - oldestPoint.startY;
  dy = dy < 0 ? -1 * dy : dy;
  if (dx - dy > 2) {
    return UgLibTouchGesture.Horizontal;
  } else if (dy - dx > 2) {
    return UgLibTouchGesture.Vertical;
  }
  // 判断失败，只有一种情况能失败，就是dx，dy的差值太小了，再等一轮判断
  return undefined;

}
