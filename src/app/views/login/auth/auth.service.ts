import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){ }
  storeLocalStorage(responseData){
    //localStorage.setItem();
    for(let key in responseData){
        let value = responseData[key];
        sessionStorage.setItem(key,value);
    }
  }
}
