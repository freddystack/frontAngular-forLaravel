import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../../model/usuarioModel';
import { ServiceApiService } from '../../../services/service-api.service';

import { compileNgModule } from '@angular/compiler';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuarioModel = new UsuarioModel()
  loading: boolean = false

  constructor( private service: ServiceApiService ) { }

  ngOnInit(): void {
  }

  registerUser(forma : NgForm){
   
    if(forma.invalid){
      Object.values( forma.controls ).forEach(e => {
        e.markAllAsTouched()
      })
      return
    } 

    this.loading = true
    setTimeout(() =>{
       this.loading = false
       forma.reset()
    } , 2000)
    if(this.loading){
       this.service.registerUser(forma.value).subscribe()
    }

  }

}
