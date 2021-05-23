import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../models/Todo.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(arr: ToDo[], filterValue: number | string): ToDo[] {
    if (filterValue === 'all') {
      return arr;
    }
    return arr.filter((todo) => todo.status === +filterValue);
  }
}
