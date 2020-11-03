import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filProduct'
})
export class FilProductPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
    if(arg === '' || arg.length < 2) return value;
     const resul = []
     for(let pro of value){
        if(pro.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
           resul.push(pro)
           console.log(pro);
        }
     }
     return resul
  }

}
