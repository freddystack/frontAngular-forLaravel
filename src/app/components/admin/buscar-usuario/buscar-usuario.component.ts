import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterViewChecked } from '@angular/core';
import { ServiceApiService } from '../../../services/service-api.service';


@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit , DoCheck {

  @Input() loggedIn : boolean
  
  array =[
    {"nombre" : "fe","correo" : "freddy@", "puesto": "admin"},
    {"nombre" : "josue","correo" : "josue@", "puesto": "admin"},
    {"nombre" : "alvaro","correo" : "alvaro@", "puesto": "rece"},
    {"nombre" : "maria","correo" : "maria@", "puesto": "rece"},
    {"nombre" : "mario","correo" : "mario@", "puesto": "bodega"},
    {"nombre" : "felipe","correo" : "felipe@", "puesto": "bodega"},
    {"nombre" : "fe","correo" : "freddy@", "puesto": "admin"},
    {"nombre" : "josue","correo" : "josue@", "puesto": "admin"},
    {"nombre" : "alvaro","correo" : "alvaro@", "puesto": "rece"},
    {"nombre" : "maria","correo" : "maria@", "puesto": "rece"},
    {"nombre" : "mario","correo" : "mario@", "puesto": "bodega"},
    {"nombre" : "Mari","correo" : "mario@", "puesto": "bodega"},
    {"nombre" : "felipe","correo" : "felipe@", "puesto": "bodega"}
  ]



  noFiltrar = true;

  filteredList = []
  searchUser: ""

  disabledAdmin = false;
  disabledRecep = false;
  disabledWare = false;

  chkAdmin = false;
  chkRecep = false
  chkWare = false
  stateSearch = false

  textModal = "hola";

  fil = "";


  // XXXXXXXXXXXXXXXXX
  usersList: any = []
  ckhFilter: boolean
 

  constructor( private service : ServiceApiService ) { }

 ngOnInit(): void {
    this.btnReverse("none")
     this.getUsers()
   
  }
  ngDoCheck(){
    console.log("do check")
  }
 

  getUsers(){
    this.service.getUsers().subscribe(
      res =>{
        console.log(res.data);
        this.usersList = res.data
      }
    )
  }

  reversa(){
  this.disabledAdmin = false
  this.disabledRecep = false
  this.disabledWare = false
  this.btnFilter("block")
  this.btnReverse("none")
  this.noFiltrar = true
  this.chkAdmin = false
  this.chkRecep = false
  this.chkWare = false
  this.filteredList = []
 
  }

  btnReverse(state :string){
    var btnReversa = document.getElementById('btnReversa')
    return btnReversa.style.display = state
  }
  btnFilter(state : string){
    var btnFiltrar = document.getElementById('btnFiltrar')
    return btnFiltrar.style.display = state
  }
 
 


  filtrarVarios(clave1: string, clave2: string){
    this.noFiltrar = false
    for(let item of this.array){  
      if(item.puesto == clave1 ){
          this.filteredList.push(item)
      }
      if(item.puesto == clave2 ){
        this.filteredList.push(item)
      }
    }
    return this.filteredList
  }

  filtrarUno(clave: string){
    this.noFiltrar = false
    this.filteredList = this.array.filter(list => list.puesto  ==  clave )
    return this.filteredList  
  }


  filtrar(){
    if(!this.chkAdmin && !this.chkRecep && !this.chkWare){
      this.textModal = "Por favor seleccioné una opción"
     
    
    }else{
      this.btnFilter("none")
      this.btnReverse("block")
    }


   
  /*   if(this.chkRecep && this.chkAdmin){
       this.disabledRecep = true
       this.disabledAdmin = true 
       this.filtrarVarios("admin","rece")
    }
    else if(this.chkWare && this.chkAdmin){
      this.disabledWare = true
      this.disabledAdmin = true 
      this.filtrarVarios("admin","bodega")
    }
    else if(this.chkWare && this.chkRecep){
       this.disabledWare = true
      this.disabledRecep = true 
      this.filtrarVarios("rece","bodega")
    } */
     if(this.chkAdmin){
       this.disabledAdmin = true
       this.filtrarUno("admin")
    } 
    else if(this.chkRecep){
      this.disabledRecep = true
      this.filtrarUno("rece")
     }
    else if(this.chkWare){
      this.disabledWare = true
      this.filtrarUno("bodega")
     }
     
  }

}
