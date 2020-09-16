/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UgTouchLogService } from './ug-touch-log.service';

describe('Service: UgTouchLog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UgTouchLogService]
    });
  });

  it('should ...', inject([UgTouchLogService], (service: UgTouchLogService) => {
    expect(service).toBeTruthy();
  }));
});
