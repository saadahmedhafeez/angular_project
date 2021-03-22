import { Component, OnChanges, OnInit } from '@angular/core';
import { navItems } from '../../_nav';
import { Router } from '@angular/router';
import { BaseService } from './services/base.service';
import { switchMap } from 'rxjs/operators';
import { FranchiseService } from '../../views/base/service/franchise.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styles: ['.d-md-block .d-none .navbar-toggler { display: none !important; }']
})
export class DefaultLayoutComponent implements OnInit, OnChanges{
  constructor(private router:Router, public baseService:BaseService,private frService: FranchiseService) {}
  public sidebarMinimized = false;
  public navItems = navItems;
  public img_url = 'assets/img/avatars/baseUser.png'
  public navbarBrandFull_url = "assets/img/brand/logo.png";
  public navbarBrandMinimized_url = "assets/img/brand/sygnet.png";


  ngOnInit(): void {
    this.baseService.getLoggedInUserData().pipe(
      switchMap(data => this.baseService.getData(data))
    ).subscribe(res => {
      this.img_url = this.baseService.baseURL+'common/getfile/' + res['image'];
    },error =>{
      console.log(error)
    });

    this.frService.getFrenchiseData().subscribe(response => {
      let logo_path = response[0]['CompanyInfo']['LogoPath'];
      this.navbarBrandFull_url = this.baseService.baseURL+'common/getfile/' + logo_path;
      console.log(this.navbarBrandFull_url);
      this.navbarBrandMinimized_url = this.baseService.baseURL+'common/getfile/' + logo_path;
    })
  }


  ngOnChanges(){
    // this.franchise.getFrenchiseData().subscribe(res => {
    //   console.log('changed');
    //   console.log(res)
    // })
  }
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigateByUrl('/login');
  }

  // clicked(e) : Observable<any> {
  //   console.log(e.srcElement.innerText);
  //   return e.srcElement.innerText.asObserveable()
  // }

  // getItem(e) {
  //   this.franchiseService.updatePage(e.srcElement.innerText);
  // }
}
