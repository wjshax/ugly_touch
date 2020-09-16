import { UgLibTouchPoint } from '../../ug-lib-touch-point';

// 从第一个点出现到后续的延迟一段时间再继续
export function gesturePreTimeout(points: Map<number, UgLibTouchPoint>, timeout: number): boolean {
  for (const point of points.values()) {
    if (timeout <= point.lifeTime) {
      return true;
    }
  }
  return false;
}
