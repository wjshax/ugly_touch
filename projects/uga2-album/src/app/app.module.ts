import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UgLibModule } from 'ug-lib';
import { UgLibTouchModule } from 'ug-lib';

import { UgMaterialsModule } from 'ug-lib';

import { AppComponent } from './app.component';
import { PagePhotoAlbumComponent } from './page-photo-album/page-photo-album.component';
import { PhotoComponent } from './components/photo/photo.component';
import { ScrollBarComponent } from './components/scroll-bar/scroll-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      PagePhotoAlbumComponent,
      PhotoComponent,
      ScrollBarComponent
   ],
   imports: [
      BrowserModule,
      UgLibModule,
      UgLibTouchModule,
      UgMaterialsModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
