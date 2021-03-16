import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(value: any[], key: string, isAscending: boolean): any[] {

    if (typeof (value) === 'undefined' || !Array.isArray(value) || typeof (key) === 'undefined') { return value };
    return value.sort((a: any, b: any) => SorterPipe.compare(a[key], b[key], isAscending));
  }

  static compare(a: any, b: any, isAscending: boolean): number {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
      return isAscending ? a - b : b - a;
    }
    else return isAscending ? a.toString().toLocaleLowerCase().localeCompare(b.toString().toLocaleLowerCase()) :
      b.toString().toLocaleLowerCase().localeCompare(a.toString().toLocaleLowerCase());
  }

}
