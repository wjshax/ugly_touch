import { Component, OnInit } from '@angular/core';


import { UgLibTouchGesture } from 'ug-lib';

import { PhotoService } from '../photo-service/photo.service';


class SearchKeyWord {
  constructor(public keyword: string) {

  }
}

@Component({
  selector: 'app-page-photo-album',
  templateUrl: './page-photo-album.component.html',
  styleUrls: ['./page-photo-album.component.css']
})
export class PagePhotoAlbumComponent implements OnInit {
  UgLibTouchGesture = UgLibTouchGesture;
  searchInputIcon = '/assets/icons/search.svg';


  ialbum = '/assets/photoalbum/album.svg';
  iphoto = '/assets/photoalbum/photo.svg';
  irecommend = '/assets/photoalbum/recommend.svg';
  isearch = '/assets/photoalbum/search.svg';

  ialbumActive = '/assets/photoalbum/album-active.svg';
  iphotoActive = '/assets/photoalbum/photo-active.svg';
  irecommendActive = '/assets/photoalbum/recommend-active.svg';
  isearchActive = '/assets/photoalbum/search-active.svg';

  photoActive = true;
  albumActive = false;
  recommendActive = false;
  searchActive = false;
  lastActive = 'photoActive';

  searchFocused = '';


  searchValue: SearchKeyWord;

  photoList: any;
  urlList: string[];

  constructor(private photoService: PhotoService) {
    this.searchValue = new SearchKeyWord('');
  }

  ngOnInit() {
    this.urlList = this.photoService.urls;
  }

  bottomBtnClicked(activePage) {
    this[this.lastActive] = false;
    this[activePage] = true;
    this.lastActive = activePage;
  }

  sendMsg() {
    console.log('test clicked', window);
    window.parent.postMessage('A message!', '*');
    window.parent.postMessage({ msg: 'woguanle' }, '*');
    console.log('test clicked really');
  }

  searchInputFocused() {
    console.log('search input focused!');
    this.searchFocused = 'searchFocused';
  }

  searchInputBlur($event) {
    console.log('searchInputBlur', $event);
    if (this.searchFocused === 'searchFocused') {
      $event.srcElement.focus();
    }
  }

  cancelSearch(inputBox) {
    this.searchFocused = '';
    inputBox.blur();
  }

  clearSearchInput() {
    this.searchValue.keyword = '';
  }


  touchedPhtotsContainer($event) {
    console.log('touchedPhtotsContainer:', $event);
  }
}
