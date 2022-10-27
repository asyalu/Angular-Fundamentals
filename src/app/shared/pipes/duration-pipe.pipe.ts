import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number): string {
    let mins: string | number = duration % 60;
    let hours: string | number = (duration - mins) / 60;
    const twoDigitNumber = 10;

    if (mins < twoDigitNumber) mins = '0' + mins;
    if (hours < twoDigitNumber) hours = '0' + hours;

    return hours + ':' + mins;
  }
}
