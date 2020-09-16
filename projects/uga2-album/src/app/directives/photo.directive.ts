import { Directive, Input } from '@angular/core';
import { PhotoService } from '../photo-service/photo.service';
import { Image } from '../media/media';

@Directive({
  selector: '[appPhoto]'
})
export class PhotoDirective {
  // tslint:disable-next-line: variable-name
  _url: string;
  image: Image;
  constructor(private photoService: PhotoService) { }

  @Input()
  set url(url: string) {
    this._url = url;
    this.image = this.photoService.getImageByUrl(url);
  }

  get url(): string { return this._url; }
}
