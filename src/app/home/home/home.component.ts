import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/_core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameStarted = false;

  constructor(
    private _router: Router,
    public user: UserService,
  ) { }

  ngOnInit() {}

  onStartGame() {
    if (this.user.user) {
      this.gameStarted = true;
    } else {
      this._router.navigateByUrl('/login');
    }
  }

  onJoinRoom() {
    this._router.navigateByUrl('/game');
  }

}
