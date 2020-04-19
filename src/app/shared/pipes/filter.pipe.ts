import { Pipe, PipeTransform } from '@angular/core';
import { Work } from '../interface/interfaces';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(works: Work[], filterSTR): Work[] {
    if (!works) {
      return
    }
    return works.filter(item => {
      const filters: string[] = item.filter;
      return filters.some(filter => filter === filterSTR)
    });
  }

}
