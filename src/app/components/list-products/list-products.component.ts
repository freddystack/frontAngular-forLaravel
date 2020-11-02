import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  array =[
    {
      "categoria" : "Electricas",
      "nombre" : "taladro",
     "descripcion" : "descripcion", 
     "disponible" : "si", 
     "stock": 12,
     "precio" : 12.32,
     "precio_anterior" : 22.12,
     "IVA" : 1.22,
     "descuento" : 0
  },
  {
    "categoria" : "Manuales",
    "nombre" : "martillo",
   "descripcion" : "descripcion", 
   "disponible" : "si", 
   "stock": 13,
   "precio" : 15.32,
   "precio_anterior" : 26.12,
   "IVA" : 5.22,
   "descuento" : 0
},
{
  "categoria" : "Pinturas",
  "nombre" : "pintura blanca",
 "descripcion" : "descripcion",
 "disponible" : "si",  
 "stock": 5,
 "precio" : 43.32,
 "precio_anterior" : 0,
 "IVA" : 5.32,
 "descuento" : 0
},
{
  "categoria" : "Pinturas",
  "nombre" : "pintura negra",
 "descripcion" : "descripcion", 
 "disponible" : "no", 
 "stock": 33,
 "precio" : 42.32,
 "precio_anterior" : 0,
 "IVA" : 1.26,
 "descuento" : 5
},
{
  "categoria" : "Pinturas",
  "nombre" : "pintura negra",
 "descripcion" : "descripcion", 
 "disponible" : "no", 
 "stock": 43,
 "precio" : 42.32,
 "precio_anterior" : 0,
 "IVA" : 1.26,
 "descuento" : 5
},

  
  ]

  listCate =[
    {
      "cate": "Electricas"
    },
    {
      "cate": "Manuales"
    },
    {
      "cate": "Pinturas"
    },
   
  ]

  textModal = ""
  chkDisc  :boolean
  chkEnab : boolean
  disabledDisc = false
  disabledEnab = false
  noFilter = true
  filterName = ""
  filteredList = []
  select= "Seleccionar..."

  stateSelect = false
  categories= "0"
  cateSelected: string = '';

  filterText = ""

  constructor() { }

  ngOnInit(): void {
    this.modal("hidden")
    this.btnReverse("none")
  }

  filterCategory(){
    this.cateSelected = this.categories
    this.stateSelect = true
    this.noFilter = false
    if(this.cateSelected == "0"){
      this.select = "Seleccionar..."
      this.btnReverse("none")
      this.btnFilter("block")
      this.filteredList = []
      return this.noFilter = true
    } 
    if(this.cateSelected != "0"){
      this.select = "...Regresar..."
      this.btnFilter("none")
      this.btnReverse("block")
    } 
    this.filteredList = this.array.filter(e => e.categoria == this.cateSelected)
    return this.filteredList
  }
  cerrar(){
    this.modal("hidden")
  }
 
  btnReverse(state :string){
   
    var btnReversa = document.getElementById('btnReverse')
    return btnReversa.style.display = state
   
  }
  btnFilter(state :string){
    var btnFiltrar = document.getElementById('btnFilter')
    return btnFiltrar.style.display = state
  }
  modal(state: string, zindex?: string){
    let mymodal = document.getElementById('mymoda')
     mymodal.style.visibility = state
     mymodal.style.zIndex = zindex 
  }

  reverse(){
    this.categories = "0"
    this.select = "Seleccionar..."
    this.disabledDisc = false
    this.disabledEnab = false
    this.chkDisc = false
    this.chkEnab = false
    this.btnFilter("block")
    this.btnReverse("none")
    this.noFilter = true
    this.filteredList = []
    
  }

  filterMultiple(){
    this.noFilter = false
    for(let item of this.array){
      if(item.descuento > 0){
          this.filteredList.push(item)
      }
      if(item.disponible == "si" ){
        this.filteredList.push(item)
      }
    }
    return this.filteredList
  }

  filterDiscount(){
    this.noFilter = false
    this.filteredList = this.array.filter(list => list.descuento > 0)
    return this.filteredList  
  }
  filterEnables(){
    this.noFilter = false
    this.filteredList = this.array.filter(list => list.disponible == "si")
    return this.filteredList  
  }

  // LES FALTA EL RETURN; A CADA CONDICION PARA QUE NO PASE AÑLA SIGUENTE

  filter(){
    this.filterCategory()
    if(!this.chkDisc && !this.chkEnab){
      this.textModal = "Por favor seleccioné una opción"
      this.modal("visible","1000")
    
    }
    else if(this.chkDisc && this.chkEnab){
      this.textModal = "Por favor seleccioné solo una opción"
      this.modal("visible","1000")
      this.chkDisc = false
      this.chkEnab = false
    } 
   
    else if(this.chkDisc){
      this.disabledDisc = true
      this.disabledEnab = true 
      this.filterDiscount()
      this.btnFilter("none")
      this.btnReverse("block")
    }
    else if(this.chkEnab){
      this.disabledDisc = true
      this.disabledEnab = true 
      this.filterEnables()
      this.btnFilter("none")
      this.btnReverse("block")
    }





  }


}
