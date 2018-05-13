import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchText: any, propToSearch: any): any {
    return searchText ? value.filter(obj => obj.propToSearch.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1) : value;
  }

}
