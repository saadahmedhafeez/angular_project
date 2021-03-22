import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  constructor(private http:HttpClient) { }
  baseURL = 'http://backbone.instaerp.com/';

  getLoggedInUserData(){
    var t = sessionStorage.getItem("access_token");
    const headerDict = new HttpHeaders({
      "Authorization": "Bearer " + t
    })
    return this.http.get(`${this.baseURL+"security/validateUserPermission/security/User"}`, { headers: headerDict })
  }

  async getData(data:any) {
    var t = sessionStorage.getItem("access_token");
    var appModuleID = data.AppModuleID
    const headerDict = new HttpHeaders({
      "Authorization": "Bearer " + t
    })
    // return this.http.get(`${this.baseURL+"security/welcome/"+appModuleID}`, { headers: headerDict }).toPromise()
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve(
          this.http.get(`${this.baseURL+"security/welcome/"+appModuleID}`, { headers: headerDict }).toPromise()
        )
      }, 2000)
    })
  }
}