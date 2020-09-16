import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'iframepipe'
})
export class IframePipePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
