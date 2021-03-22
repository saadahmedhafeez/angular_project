import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {

  baseURLLogin = 'http://backbone.instaerp.com/security/getUserFranchise';
  constructor(private http: HttpClient) { }
  getFrenchiseData() {
    var t = sessionStorage.getItem("access_token");
    const headerDict = new HttpHeaders({
      "Authorization": "Bearer " + t
    })
    return this.http.get(`${this.baseURLLogin}`, { headers: headerDict })
  }
}
