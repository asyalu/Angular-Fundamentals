import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creationDate',
})
export class CreationDatePipe implements PipeTransform {
  transform(value: Date): string {
    return value
      ? `${value.getDay()}.${value.getMonth()}.${value.getFullYear()}`
      : 'unknown';
  }
}
