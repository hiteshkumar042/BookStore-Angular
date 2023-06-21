import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any, args: any) {
    if (!args) {
      return value
    }
    ///price wise  - low to high
    else if (args === "lowtohigh") {
      return value.sort((val1: any, val2: any) => val1.discountPrice - val2.discountPrice)
    }
    //price wise - high to low
    else if (args === "hightolow") {
      return value.sort((val1: any, val2: any) => val2.discountPrice - val1.discountPrice)
    }
    //A to Z
    else if(args === "atoz"){
      return value.sort((val1: any, val2: any) => {
        let titleA=val1.bookName
        let titleB= val2.bookName
        if(titleA>titleB){
          return 1
        }
        if(titleA<titleB){
          return -1
        }
        return 0
      })
    }
    //Z to A 
    else if(args === "ztoa"){
      return value.sort((val1: any, val2: any) => {
        let titleA=val1.bookName
        let titleB= val2.bookName
        if(titleA>titleB){
          return -1
        }
        if(titleA<titleB){
          return 1
        }
        return 0
      })
    }

  }
}