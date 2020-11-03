import { Injectable } from '@angular/core';
import * as cryptoJs from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncrypjsService {

  readonly secretKey = "EstaEsMiClaveSecreta"

  constructor() { }

  encrypt(value: string): string{
       return cryptoJs.AES.encrypt( value , this.secretKey.trim()).toString()
  }
  
  decrypt(value: string): string{
      return cryptoJs.AES.decrypt(value, this.secretKey.trim()).toString(cryptoJs.enc.Utf8);
  }
}
