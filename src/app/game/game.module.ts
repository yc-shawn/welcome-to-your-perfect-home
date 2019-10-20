import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/_shared/shared.module';

import { GameComponent } from './game/game.component';
import { GameCardComponent } from './game-card/game-card.component';
import { GameNumberComponent } from './game-number/game-number.component';


@NgModule({
  declarations: [GameComponent, GameCardComponent, GameNumberComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GameComponent }])
  ]
})
export class GameModule { }
