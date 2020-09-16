import { Injectable, Type } from '@angular/core';

import { UgLibService } from '../ug-lib.service';

@Injectable()
export class UgPageContainerService {
  container: any;

  constructor(private ugLibService: UgLibService) {
    this.container = null;
    this.ugLibService.regContainer(this);
  }
  regContainer(container) {
    this.container = container;
  }
  pageAdd(page: Type<any>) {
    if (this.container != null) {
      this.container.pageAdd(page);
    } else {
      console.error('container null');
    }
  }
  pageRemove(delay = 50) {
    if (this.container != null) {
      this.container.pageRemove(delay);
    } else {
      console.error('container null');
    }
  }
}
