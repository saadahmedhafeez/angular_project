import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class loginStatusService {
  constructor(){ }
  loginStatus()
  {
    return !!sessionStorage.getItem("access_token");
  }
}
