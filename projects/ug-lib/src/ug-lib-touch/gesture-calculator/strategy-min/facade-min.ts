import { UgServiceTouchService } from '../../ug-service-touch.service';
import { GestureFacade } from '../gesture-facade';

export class FacadeMin extends GestureFacade {
    constructor(touchService: UgServiceTouchService) {
        super(touchService);
    }
}
