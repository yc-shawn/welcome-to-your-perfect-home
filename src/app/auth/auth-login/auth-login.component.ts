import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/_core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  userName: string;

  constructor(private _user: UserService) { }

  ngOnInit() { }

  onLogin() {
    this._user.login(this.userName);
  }

}
