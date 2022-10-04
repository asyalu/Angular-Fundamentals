import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner',
})
export class StringJoinerPipe implements PipeTransform {
  transform(stringArr: string[], separator: string): string {
    return stringArr.join(separator);
  }
}
