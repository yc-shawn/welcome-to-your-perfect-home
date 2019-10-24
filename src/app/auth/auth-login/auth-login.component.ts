import { Component } from '@angular/core';
import { UserService } from '@app/_core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent {

  userName: string;

  constructor(private _user: UserService) { }

  /**
   * Login use entered user name
   */
  onLogin() {
    this._user.login(this.userName);
  }

}
