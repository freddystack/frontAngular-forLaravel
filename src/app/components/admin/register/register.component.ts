import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../../model/usuarioModel';
import { ServiceApiService } from '../../../services/service-api.service';
import { EncrypjsService } from '../../../services/encrypjs.service';

import { ActivatedRoute } from '@angular/router';


import { compileNgModule } from '@angular/compiler';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  usuarioModel = new UsuarioModel()
  loading: boolean = false

  constructor( private service: ServiceApiService,
               private activateRouter: ActivatedRoute,
               private ecrypt : EncrypjsService
    ) { }

  ngOnInit(): void {
      this.updateUser()
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


  updateUser(){
    this.activateRouter.params.subscribe( p =>   {
       console.log( p['id'] )
    let de =  this.ecrypt.decrypt(p['id'])
       console.log("ESTE DESEINCRITADA  --" + de); 
    } )
   

  }

}
