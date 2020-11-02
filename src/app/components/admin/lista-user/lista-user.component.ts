import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent implements OnInit {

  array =[
    {"nombre" : "fe"},
    {"nombre" : "fe"},
    {"nombre" : "fe"},
    {"nombre" : "fe"},
    {"nombre" : "fe"}
  
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
