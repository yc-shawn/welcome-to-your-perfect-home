import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/_shared/shared.module';

import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [GameComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: GameComponent }])
  ]
})
export class GameModule { }
