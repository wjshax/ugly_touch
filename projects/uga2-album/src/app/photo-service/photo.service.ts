import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HandleError } from '../http/http-error-handler.service';

import { Image, Video } from '../media/media';

class Assets {
  name: string;
  baseUrl: string;
  assetsListUrl: string;
  assetsUrl: string;
  image: Map<string, Image>;
  video: Map<string, Video>;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private handleError: HandleError;

  baseUrl = 'http://192.168.1.3:5000';
  photoList = '/album/list';
  public assetsMap: Map<string, Assets>;


  urls: string[];

  constructor(private http: HttpClient) {
    console.log('PhotoService constructed!');
    this.assetsMap = new Map();
    this.getFileList(this.baseUrl + this.photoList);
    this.urls = new Array();
  }

  getFileList(url) {
    this.http.get(url).subscribe((data) => {
      const asset = new Assets();
      this.assetsMap.set('test', asset);
      // console.log('got FileList:', this.assetsMap, data, typeof data);

      let fileInfo: any;
      fileInfo = data;

      for (const file of fileInfo.files) {
        const name = file.name;
        if (name.endsWith('.PNG')) {
          this.urls.push(this.baseUrl + fileInfo.baseUrl + name);
        }
      }
      // console.log(this.urls);
    });
  }

  handleTest(asset: Assets, data) {

  }

  getImageByUrl(url: string): Image {
    return this.assetsMap.get('test').image.get(url);
  }
  getVideoByUrl(url: string): Video {
    return this.assetsMap.get('test').video.get(url);
  }
  getUrlList(): string[] {
    return this.urls;
  }
}
