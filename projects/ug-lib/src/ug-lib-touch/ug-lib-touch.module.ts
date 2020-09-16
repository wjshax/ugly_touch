import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UgServiceTouchService } from './ug-service-touch.service';
import { UgTouchLogService } from './ug-touch-log.service';

import { UgLibTouchDirective } from './ug-lib-touch.directive';

@NgModule({
   imports: [
      CommonModule
   ],
   providers: [
      UgServiceTouchService,
      UgTouchLogService
   ],
   declarations: [
      UgLibTouchDirective,
   ],
   exports: [
      UgLibTouchDirective
   ]
})
export class UgLibTouchModule { }
