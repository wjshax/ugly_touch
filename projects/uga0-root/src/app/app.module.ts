import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { UgLibModule } from 'ug-lib';
import { UgLibTouchModule } from 'ug-lib';

import { UgMaterialsModule } from 'ug-lib';

import { PageIndexComponent } from './page-index/page-index.component';
import { PageUserComponent } from './page-user/page-user.component';
import { PageTouchTestComponent } from './page-touch-test/page-touch-test.component';
import { PageWithPagesComponent } from './page-with-pages/page-with-pages.component';
import { PageAindexComponent } from './page-aindex/page-aindex.component';
import { PageObservableTestComponent } from './page-observable-test/page-observable-test.component';

import { SenderComponent } from './page-observable-test/sender/sender.component';
import { ReceiverComponent } from './page-observable-test/receiver/receiver.component';
import { PageAnimationsComponent } from './page-animations/page-animations.component';

import { RotateCalPipe } from './page-animations/rotateCal.pipe';
import { TouchZoomRotationPipe } from './pipes/touch-zoom-rotation.pipe';

import { PageAnimationsBComponent } from './page-animations-b/page-animations-b.component';
import { PageTouchAComponent } from './page-touch-a/page-touch-a.component';
import { PageTouchBComponent } from './page-touch-b/page-touch-b.component';
import { PageTouchCComponent } from './page-touch-c/page-touch-c.component';
import { PageTouchDComponent } from './page-touch-d/page-touch-d.component';
import { PageTouchEComponent } from './page-touch-e/page-touch-e.component';
import { PageTouchFComponent } from './page-touch-f/page-touch-f.component';
import { PagePhotoAlbumComponent } from './page-photo-album/page-photo-album.component';
import { PageInputViewportTestComponent } from './page-input-viewport-test/page-input-viewport-test.component';
import { PageTouchGComponent } from './page-touch-g/page-touch-g.component';

@NgModule({
   declarations: [
      AppComponent,
      PageIndexComponent,
      PageUserComponent,
      PageTouchTestComponent,
      PageWithPagesComponent,
      PageAindexComponent,
      PageObservableTestComponent,
      SenderComponent,
      ReceiverComponent,
      PageAnimationsComponent,
      RotateCalPipe,
      TouchZoomRotationPipe,
      PageAnimationsBComponent,
      PageTouchAComponent,
      PageTouchBComponent,
      PageTouchCComponent,
      PageTouchDComponent,
      PageTouchEComponent,
      PageTouchFComponent,
      PagePhotoAlbumComponent,
      PageInputViewportTestComponent,
      PageTouchGComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      UgLibModule,
      UgLibTouchModule,
      UgMaterialsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
