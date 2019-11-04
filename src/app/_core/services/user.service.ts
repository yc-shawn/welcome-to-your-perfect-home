import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/_shared';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(
    private _router: Router,
  ) {
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }

  /**
   * Login with given user name
   * Re-direct back to homepage when login succeed
   *
   * @param userName - User name
   */
  login(userName: string) {
    this.user = { name: userName };
    sessionStorage.setItem('user', JSON.stringify(this.user));
    this._router.navigateByUrl('/');
  }
}
