/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PageCounterService } from './page-counter.service';

describe('Service: PageCounter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageCounterService]
    });
  });

  it('should ...', inject([PageCounterService], (service: PageCounterService) => {
    expect(service).toBeTruthy();
  }));
});
