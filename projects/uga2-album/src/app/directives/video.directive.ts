import { Directive, Input } from '@angular/core';
import { PhotoService } from '../photo-service/photo.service';
import { Video } from '../media/media';

@Directive({
  selector: '[appVideo]'
})
export class VideoDirective {

  // tslint:disable-next-line: variable-name
  _url: string;
  video: Video;
  constructor(private photoService: PhotoService) { }
  @Input()
  set url(url: string) {
    this._url = url;
    this.video = this.photoService.getVideoByUrl(url);
  }

  get url(): string { return this._url; }
}
