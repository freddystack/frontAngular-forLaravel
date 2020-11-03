import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(value: any, arg: any ): any {
    if(arg === '' || arg.length < 2) return value;
     const resul = []
     for(let nom of value){
        if(nom.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
           resul.push(nom)
           console.log(nom);
        }
     }
     return resul
  }

}
