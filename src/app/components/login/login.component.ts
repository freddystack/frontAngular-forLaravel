import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../services/service-api.service';
import swal from 'sweetalert2' 
import { NgForm } from '@angular/forms';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { isDefined } from '@angular/compiler/src/util';
import { UsuarioModel } from '../../model/usuarioModel';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  textModal :string
  password : string
  mensaje: string = ""
  usuarioModel = new UsuarioModel()


  email: string
  jsonSend ={
    email: "",
    password: ""
  }

  constructor(private service : ServiceApiService) { }

  ngOnInit(): void {
    
  }




  /*

   CUANDO VIENE EL ERRPE DEL VALIDATOR LO ATRAPA EÑ ERR
   PERO SI VIENE ALGUNA EXEPCION COMO QUE NO COINCIDE ALGUN DATO LO ATRAPA EL RES

  */

  login( forma : NgForm){
     console.log(forma)


    if(forma.invalid){
       Object.values( forma.controls ).forEach(e => {
         e.markAllAsTouched()
       })

       return
    }
 


    this.service.login(this.usuarioModel).subscribe(
      res => {
     
        console.log(res) 
      },
       err => {
          swal.fire({
            icon : 'error',
            title : "Algo salio mal",
            text : err.error.data
          })
        })
  }
 



}
