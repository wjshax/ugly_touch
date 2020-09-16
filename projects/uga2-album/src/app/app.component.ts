import { Component, OnInit } from '@angular/core';
import { UgPageContainerService } from 'ug-lib';

import { PagePhotoAlbumComponent } from './page-photo-album/page-photo-album.component';

import { PhotoService } from './photo-service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UgPageContainerService]
})
export class AppComponent implements OnInit {
  title = 'uga2-album';
  pageEmptyFlag = false;
  constructor(public ugPageContainerService: UgPageContainerService, public photoService: PhotoService) {

  }
  ngOnInit() {
    this.ugPageContainerService.pageAdd(PagePhotoAlbumComponent);
  }
  pageInc() {
    console.log('page inc');
  }
  pageDec() {
    console.log('page dec');
  }

  pageEmpty() {
    this.pageEmptyFlag = true;
    console.log('uga2-album-page-empty');
    window.parent.postMessage({ msg: 'woguanle' }, '*');
    console.log('Message posted!');
  }
}
