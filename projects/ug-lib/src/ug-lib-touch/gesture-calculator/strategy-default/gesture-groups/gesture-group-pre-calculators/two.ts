import { UgLibTouchGesture } from '../../../../ug-lib-touch-gesture.enum';
import { GestureFacade } from '../../../gesture-facade';
import { UgLibTouchPoint } from '../../../../ug-lib-touch-point';

export function Two(gestures: Map<UgLibTouchGesture, boolean>, facade: GestureFacade): UgLibTouchGesture {
  let pointA: UgLibTouchPoint;
  let pointB: UgLibTouchPoint;
  pointA = undefined;
  pointB = undefined;
  // 将生命周期最长的两个点标记为pointA和pointB
  for (const point of facade.points.values()) {
    if (pointA === undefined) {
      pointA = point;
    } else if (pointB === undefined) {
      if (point.lifeTime > pointA.lifeTime) {
        pointB = pointA;
        pointA = point;
      }
      pointB = point;
    } else if (point.lifeTime > pointA.lifeTime) {
      pointB = pointA;
      pointA = point;
    } else if (point.lifeTime > pointB.lifeTime) {
      pointB = point;
    }
  }

  {
    pointA.mark = 'A';
    pointB.mark = 'B';
  }

  // 将facade里面的twoAndTouches内部的最顶层的gesutures
  {
    let f: any;
    f = facade;
    const twoAndTouches = f.twoAndTouches;
    let topIndex = -1;
    for (const touchAndIndex of twoAndTouches.values()) {
      if (touchAndIndex.index > topIndex) {
        topIndex = touchAndIndex.index;
      }
    }

    const avaGes = new Map();
    for (const g of twoAndTouches.keys()) {
      const touchAndIndex = twoAndTouches.get(g);
      if (touchAndIndex.index === topIndex) {
        avaGes.set(g, true);
      }
    }

    for (const g of gestures.keys()) {
      if (!avaGes.get(g)) {
        // gestures.set(g,false);
        gestures.delete(g);
      }
    }
  }

  // 这里的逻辑是 如果有ZoomRotation，则直接ZoomRotation,如果同时有Zoom和Rotation，则简单判断一下，如果是Zoom或者Rotation，则直接返回
  if (gestures.get(UgLibTouchGesture.ZoomRotation)) {
    return UgLibTouchGesture.ZoomRotation;
  } else if (gestures.get(UgLibTouchGesture.Rotation) && gestures.get(UgLibTouchGesture.Zoom)) {
    // 怎么搞？
    if (Math.random() < 0.5) {
      return UgLibTouchGesture.Rotation;
    } else {
      return UgLibTouchGesture.Zoom;
    }
  } else if (gestures.get(UgLibTouchGesture.Rotation)) {
    return UgLibTouchGesture.Rotation;
  } else if (gestures.get(UgLibTouchGesture.Zoom)) {
    return UgLibTouchGesture.Zoom;
  }
  console.error('gesture-group-pre-calculators,ERROR:在分组为Two的里面没有需要的手势，bug了~~~');
  return undefined;
}
