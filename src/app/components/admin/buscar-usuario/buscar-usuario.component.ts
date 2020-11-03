import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterViewChecked ,AfterContentChecked } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceApiService } from '../../../services/service-api.service';
import { EncrypjsService } from '../../../services/encrypjs.service';

import { Router } from '@angular/router';



@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit  {

  @Input() loggedIn : boolean


  chkAdmin = false;
  chkRecep = false
  chkWare = false
  fil = "";
  usersList: any = []
  btnFilter: string = ""
  btnReverse: string = ""
  disabledRadio = false;
 


  constructor( private service : ServiceApiService,
               private router  : Router,
               private encrypt : EncrypjsService
    
    ) { }

 ngOnInit(): void {
     this.btnReverse = "none"
     this.getUsers()
  }

  getUsers(){
    this.service.getUsers().subscribe(
      res =>{
        this.usersList = res.data
      }
    )
  }

  reverse(){
    this.btnFilter = "block"
    this.btnReverse = "none"
    this.disabledRadio = false
    this.getUsers()
  }


  filterList(clave: string){
    this.usersList = this.usersList.filter( e => e.roll == clave)
    return this.usersList
  }


  filter(){
    if(!this.chkAdmin && !this.chkRecep && !this.chkWare){
      return
    }else{
      this.btnFilter = "none"
      this.btnReverse = "block"
    }

     if(this.chkAdmin){
       this.filterList("admin")
       this.disabledRadio = true
    } 
    else if(this.chkRecep){
      this.filterList("reception")
      this.disabledRadio = true
     }
    else if(this.chkWare){
      this.filterList("warehouse")
      this.disabledRadio = true
     }
     
  }

  preDeleteUser(id : any){
    Swal.fire({
      icon: "warning",
      title: '¿Quieres eliminar este usuario?',
      showDenyButton: true,
      showCloseButton: true,
      
      confirmButtonText: `Si`,
      denyButtonText: `No`,
    }).then((result) =>{

      if(result.isConfirmed){
        console.log("SI ELIMINAR");
         this.service.deleteUser(id).subscribe()
        this.getUsers()
      }
    })
  }

  sendUserToUpdate(id : any){
     
       id = id.toString()
       let m = this.encrypt.encrypt(id)
     //  console.log("cifrado---"+m);
       this.router.navigate(['/admin/register', m])
  }



}
