/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UgPageContainerService } from './ug-page-container.service';

describe('Service: UgPageContainer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UgPageContainerService]
    });
  });

  it('should ...', inject([UgPageContainerService], (service: UgPageContainerService) => {
    expect(service).toBeTruthy();
  }));
});
