import { Pipe, PipeTransform } from '@angular/core';
import { format, ParsedNumber } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: ParsedNumber, args?: any): any {
    if (!value) {
      return value;
    }
    return format(value, 'International');
  }

}
