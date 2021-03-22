import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { loginStatusService } from '../auth/login-status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private isLogin: loginStatusService, private router: Router) {}
  canActivate() : boolean {
    if(!this.isLogin.loginStatus()){
      this.router.navigateByUrl("/login");
      // return true;
    }
    return true;
  }
}
