import { GestureFacade } from '../../gesture-facade';


export abstract class GestureStrategy {
  static init(facade: GestureFacade): any { }
  static moving(facade: GestureFacade): any { }
  static end(facade: GestureFacade): any { }
}
