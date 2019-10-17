import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/_shared/shared.module';

import { GameComponent } from './game/game.component';
import { GameCardComponent } from './game-card/game-card.component';


@NgModule({
  declarations: [GameComponent, GameCardComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GameComponent }])
  ]
})
export class GameModule { }
