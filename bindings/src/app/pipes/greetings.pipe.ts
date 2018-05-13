import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `Hello ! ${value} Welcome`
  }

}
