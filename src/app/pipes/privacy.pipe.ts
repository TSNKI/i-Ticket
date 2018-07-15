import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'privacy'
})
export class PrivacyPipe implements PipeTransform {

  transform(value: string, maxLength: 19): any {
    if (value.length > 7) {
      let mosaic = '';
      for (let i = 0; i < min(value.length, maxLength) - 7; i++) {
        mosaic += '*';
      }
      return value.slice(0, 3) + mosaic + value.slice(value.length - 4, value.length);
    } else {
      return value;
    }
  }

}

function min(a: number, b: number): number {
  return a > b ? b : a;
}
