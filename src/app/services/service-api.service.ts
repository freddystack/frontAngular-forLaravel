import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UsuarioModel } from '../model/usuarioModel';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import  swa  from 'sweetalert2';




@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  private readonly URL = 'http://127.0.0.1:8000/api/';
  token: string;

  constructor(private http : HttpClient,
              private router : Router
    ) { }

  login(usuario: UsuarioModel):Observable<any>{
    const datosUsuario ={
      email: usuario.email,
      password: usuario.password
    }
   return this.http.post(`${this.URL}login`, datosUsuario)
   .pipe(
     map((res: any) =>{
          this.saveToken( res.token.token )
          if(res.roll === "admin"){
             this.router.navigate(['/admin'])
          }else if(res.roll === "reception"){
            this.router.navigate(['/reception'])
          }else{
            this.router.navigate(['/warehouse'])
          }
     })
   )
  }

  registerUser(user : UsuarioModel): Observable<any>{
    
    const dataUser ={
      name: user.name,
      email: user.email,
      password: user.password,
      roll: user.roll
    }
     return this.http.post(`${this.URL}admin/register`, dataUser)
     .pipe(
        map((res:any) =>{
            swa.fire({
              icon: "success",
              text: res.data
            })
         })  , 
         catchError( err => of(
             swa.fire({
                icon: 'error',
                text: err.error.error.email
             })
         ) )

     )
  }

  getUsers():Observable<any>{
     return this.http.get(`${this.URL}admin/users`)
  }

  private saveToken(token : string){
    this.token = token
    localStorage.setItem('token', token)
  }
  getToken(){
    return localStorage.getItem('token')
  }
    
};
