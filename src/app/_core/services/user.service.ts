import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user;

  constructor(private _router: Router) { }

  login(userName: string) {
    this.user = { name: userName };
    this._router.navigateByUrl('/');
  }
}
