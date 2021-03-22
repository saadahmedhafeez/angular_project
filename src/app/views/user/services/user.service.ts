import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, user } from '../dumy-data/users-data'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  public allUsers: any = new BehaviorSubject<any>(user);
}
