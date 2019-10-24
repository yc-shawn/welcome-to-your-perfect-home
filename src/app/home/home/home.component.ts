import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@app/_core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  gameStarted = false;

  constructor(
    private _router: Router,
    public user: UserService,
  ) { }

  /**
   * When click on start game
   * Go to login page if user not login yet.
   */
  onStartGame() {
    if (this.user.user) {
      this.gameStarted = true;
    } else {
      this._router.navigateByUrl('/login');
    }
  }

  /**
   * Go to game page if user click join
   */
  onJoinRoom() {
    this._router.navigateByUrl('/game');
  }

}
