import { TestBed } from '@angular/core/testing';

import { UgLibService } from './ug-lib.service';

describe('UgLibService', () => {
  let service: UgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
