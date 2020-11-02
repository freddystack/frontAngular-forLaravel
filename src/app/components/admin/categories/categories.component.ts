import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

 newCategorie =""
 textModal = "gg"


  constructor() { }



  ngOnInit(): void {
    this.modal("hidden")
  }


  modal(state: string, zindex?: string){
    let mymodal = document.getElementById('mymoda')
     mymodal.style.visibility = state
     mymodal.style.zIndex = zindex 
  }
  cerrar(){
    this.modal("hidden")
  }
  delete(){

  }
  update(){

  }

}
