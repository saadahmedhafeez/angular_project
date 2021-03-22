import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LoginService } from './login.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService,
    private router:Router, 
    private authService: AuthService)
  {}
  public loggedIn = true;
  public loading = false

  ngOnInit(): void {}

  form = new FormGroup({
    username: new FormControl('user@dmenu.com', [Validators.required,
      Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    password:  new FormControl('Asd@321', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  } 

  logindata(){
    this.loading = true;
    this.LoginService.getLoginData(this.form.value).subscribe(responseData => {
      this.authService.storeLocalStorage(responseData);
      this.router.navigateByUrl('/dashboard');
    }, error => {
      this.loggedIn = false;
      this.loading = false;
      console.log(error);
    });
    
    // this.form.reset();
  }
}
