import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mixedCase'
})
export class MixedCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase() + args[0];
  }

}
