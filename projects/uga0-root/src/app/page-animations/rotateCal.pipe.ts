import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rotateCal'
})
export class RotateCalPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return `rotate(${Math.round(value * 360 / 100)}deg)`;
  }

}
