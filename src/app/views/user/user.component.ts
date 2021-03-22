import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../user/dumy-data/users-data'
import { UserService } from './services/user.service';
import { BaseService } from '../.././containers/default-layout/services/base.service'
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private userService: UserService, public baseService:BaseService ) { }
  public users : User[] = [];
  public firstName: any;
  public p: number = 1;
  public img_url = 'assets/img/avatars/baseUser.png'
  

  ngOnInit(): void {
    this.userService.allUsers.subscribe((res: User[])=>{
      this.users = res
    });
    this.baseService.getLoggedInUserData().pipe(
      switchMap(data => this.baseService.getData(data))
    ).subscribe(res => {
      this.img_url = this.baseService.baseURL+'common/getfile/' + res['image'];
    },error =>{
      console.log(error)
    });
  }

  ngOnDestroy(){
    // this.userService.allUsers.unsubscribe()
  }

  Search(){
    if(this.firstName === ''){
      this.ngOnInit();
    }
    else{
      this.users = this.users.filter(res => {
        return res['First Name'].toLocaleLowerCase().match(this.firstName.toLocaleLowerCase())
      })
    }
  }

  key:string = 'First Name';
  reverse:boolean = false
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
