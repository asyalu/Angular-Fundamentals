import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(duration: number | null): string {
    if (!duration) {
      return '00:00';
    }

    let mins: string | number = duration % 60;
    let hours: string | number = (duration - mins) / 60;

    if (mins < 10) mins = '0' + mins;
    if (hours < 10) hours = '0' + hours;

    return hours + ':' + mins;
  }
}
