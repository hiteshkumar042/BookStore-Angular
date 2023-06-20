import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searching'
})
export class SearchingPipe implements PipeTransform {

  transform(value: any[], args: any) {
    if(!args){
      return value
    }
    else{
      return value?.filter(item => {
        return item.bookName.toLowerCase().includes(args)||item.author.toLowerCase().includes(args)
      })
    }
  }

}