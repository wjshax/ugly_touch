import { UgLibTouchGesture } from '../../../ug-lib-touch-gesture.enum';
import { FacadeDefault } from '../facade-default';
import { UgTouchDirectiveService } from '../../../ug-touch-directive.service';


const GestureGroupInfo = new Map()
  .set(UgLibTouchGesture.Horizontal, 'one')
  .set(UgLibTouchGesture.Vertical, 'one')
  .set(UgLibTouchGesture.VerHor, 'one')
  .set(UgLibTouchGesture.Zoom, 'two')
  .set(UgLibTouchGesture.Rotation, 'two')
  .set(UgLibTouchGesture.ZoomRotation, 'two');

const Groups = {
  one: { points: 1, priority: 1 },
  two: { points: 2, priority: 2 },
};
// 根据点数和优先级确定分组
export function findGroup(facade: FacadeDefault, gestures: Map<UgLibTouchGesture, boolean>): string {
  const groupOne = new Map<UgLibTouchGesture, boolean>();
  const groupTwo = new Map<UgLibTouchGesture, boolean>();

  // 如果只有一个，那么筛选掉点数大于1的组
  if (facade.points.size === 1) {
    for (const gesture of gestures.keys()) {
      const group = GestureGroupInfo.get(gesture);
      const pointCnt = Groups[group].points;
      if (pointCnt > 1) {
        // gestures.set(gesture, false);
        gestures.delete(gesture); // 直接删除了算求
      }
    }
    return 'one';
  } else {

    // 根据点数区分One和Tow
    let two = false;
    for (const gesture of gestures.keys()) {
      const group = GestureGroupInfo.get(gesture);
      const pointCnt = Groups[group].points;
      if (pointCnt > 1) {
        two = true;
        break;
      }
    }

    const twoAndTouches = new Map<UgLibTouchGesture, { touch: UgTouchDirectiveService, index: number }>();

    // 如果是two，则还要判断手势的公共touch
    if (two) {

      // 以此判断每个手势是否在point里面存在公共的touch，如果存在，则记录下这个touch及其对应的touch
      for (const gesture of gestures.keys()) {
        const group = GestureGroupInfo.get(gesture);
        const pointCnt = Groups[group].points;
        // 把point里面的group two取的手势出来
        if (pointCnt > 1) {
          for (let i = 0; i < facade.publicIndex * -1; i++) {
            let hasGesture = true;
            let touch: UgTouchDirectiveService; // 用来记录当前index下的这个touch
            let gesIndex: number;
            for (const point of facade.points.values()) {
              const index = point.touches.length - 1 - i; // 每个point都需要重新计算index
              const gs = point.touches[index].gestures;
              let pointHasGesture = false;
              for (const g of gs) {
                if (g === gesture) {
                  pointHasGesture = true;
                  touch = point.touches[index];
                  break;
                }
              }

              // 如果这个point没有这个gesture，则换下一个point
              if (pointHasGesture === false) {
                hasGesture = false;
                break; // 不需要继续判断了
              }

              touch = point.touches[index];
              gesIndex = facade.publicIndex + i;
            }

            // 这个手势判断成功
            if (hasGesture) {
              twoAndTouches.set(gesture, { touch, index: gesIndex });
            }
          }
        }
      }
    }

    facade.twoAndTouches = twoAndTouches;


    if (two) {
      for (const gesture of gestures.keys()) {
        const group = GestureGroupInfo.get(gesture);
        const pointCnt = Groups[group].points;
        if (pointCnt < 2) {
          // gestures.set(gesture, false);
          gestures.delete(gesture); // 直接删除了算求
        }
      }
      return 'two';
    } else {
      for (const gesture of gestures.keys()) {
        const group = GestureGroupInfo.get(gesture);
        const pointCnt = Groups[group].points;
        if (pointCnt > 1) {
          // gestures.set(gesture, false);
          gestures.delete(gesture); // 直接删除了算求
        }
      }
      return 'one';
    }
  }
}
