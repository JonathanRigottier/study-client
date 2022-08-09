import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNoPipe'
})
export class YesNoPipePipe implements PipeTransform {

  transform(value: any): any {
    return value ? 'Yes' : 'No';
  }

}
