import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UgPageComponent } from './ug-page/ug-page.component';
import { UgPageIframeComponent } from './ug-page-iframe/ug-page-iframe.component';
import { UgPageContainerComponent } from './ug-page-container/ug-page-container.component';

import { UgPageHostDirective } from './ug-page/ug-page-host.directive';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {UgLibTouchModule} from '../ug-lib-touch/ug-lib-touch.module';

import { IframePipePipe } from './ug-page-iframe/iframe-pipe.pipe';

@NgModule({
  declarations: [
    UgPageComponent,
    UgPageIframeComponent,
    UgPageContainerComponent,
    UgPageHostDirective,
    IframePipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UgLibTouchModule
  ],
  exports: [
    UgPageComponent,
    UgPageIframeComponent,
    UgPageContainerComponent,
  ],
  providers: []
})
export class UgLibModule { }
