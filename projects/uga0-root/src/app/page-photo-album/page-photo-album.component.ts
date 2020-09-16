import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-photo-album',
  templateUrl: './page-photo-album.component.html',
  styleUrls: ['./page-photo-album.component.css']
})
export class PagePhotoAlbumComponent implements OnInit {
  url = 'http://192.168.1.3:4202/';
  constructor() { }
  ngOnInit() {
  }
}
