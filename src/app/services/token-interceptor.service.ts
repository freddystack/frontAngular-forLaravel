import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ServiceApiService } from './service-api.service';



@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

   constructor( private service : ServiceApiService ){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
 
  const TOKENREQUEST =  req.clone({
     setHeaders: {
       Authorization: `Bearer ${this.service.getToken()}`
     }
   })

    return next.handle(TOKENREQUEST)
  }

  
}
