import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User[], phrase: string): User[] {
    return value.filter(item => item.name.toString().toLowerCase().includes(phrase.toLowerCase()));
  }

}
