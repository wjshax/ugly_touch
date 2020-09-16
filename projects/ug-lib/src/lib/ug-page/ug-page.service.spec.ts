/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UgPageService } from './ug-page.service';

describe('Service: UgPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UgPageService]
    });
  });

  it('should ...', inject([UgPageService], (service: UgPageService) => {
    expect(service).toBeTruthy();
  }));
});
