import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'touchZoomRotation'
})
export class TouchZoomRotationPipe implements PipeTransform {

  transform(scale: number, rotate: number): string {
    return `rotate(${rotate}deg scale(${scale}))`;
  }

}
