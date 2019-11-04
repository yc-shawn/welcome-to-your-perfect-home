import { Component, OnInit } from '@angular/core';
import { PLAN1S } from '@app/utils/cards';

@Component({
  selector: 'app-game-actions',
  templateUrl: './game-actions.component.html',
  styleUrls: ['./game-actions.component.scss']
})
export class GameActionsComponent implements OnInit {

  planN1 = {
    number: 1,
    name: '44',
    position: 'front'
  };

  planN2 = {
    number: 2,
    name: '44',
    position: 'front'
  };

  planN3 = {
    number: 3,
    name: '44',
    position: 'front'
  };

  constructor() { }

  /**
   * Initialize city plan cards
   * @override
   */
  ngOnInit() {
    this.planN1.name = PLAN1S[Math.round(Math.random() * (PLAN1S.length - 1))];
  }

  /**
   * Flip the city plan card
   *
   * @param plan - City plan object
   */
  onFlipPlan(plan) {
    if (plan.position === 'front') {
      plan.position = 'back';
    } else {
      plan.position = 'front';
    }
  }

}
