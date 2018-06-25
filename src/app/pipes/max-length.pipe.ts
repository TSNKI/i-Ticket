import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, length: number): any {
    if (value.length > length) {
      return value.slice(0, length) + '...';
    } else {
      return value;
    }
  }

}
