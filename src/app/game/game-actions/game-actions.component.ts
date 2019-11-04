import { Component, OnInit } from '@angular/core';
import { random, shuffle } from 'lodash';
import { PLAN1S, PARKES, FENCES, BISES, AGENCIES, POOLS, ESTATES, PLAN2S, PLAN3S } from '@app/utils/cards';
import { Card } from '@app/_shared';

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

  deck: Card[] = [];

  combinations: any[] = [];

  constructor() { }

  /**
   * Initialize city plan cards
   * @override
   */
  ngOnInit() {
    this.planN1.name = PLAN1S[random(0, PLAN1S.length - 1)];
    this.planN2.name = PLAN2S[random(0, PLAN2S.length - 1)];
    this.planN3.name = PLAN3S[random(0, PLAN3S.length - 1)];

    this.deck = this.deck.concat(PARKES.map(number => new Card(number, 'park')));
    this.deck = this.deck.concat(FENCES.map(number => new Card(number, 'fence')));
    this.deck = this.deck.concat(BISES.map(number => new Card(number, 'bis')));
    this.deck = this.deck.concat(AGENCIES.map(number => new Card(number, 'agency')));
    this.deck = this.deck.concat(POOLS.map(number => new Card(number, 'pool')));
    this.deck = this.deck.concat(ESTATES.map(number => new Card(number, 'estate')));

    this.deck = shuffle(this.deck);

    for (let index = 0; index < 3; index++) {
      this.combinations.push({
        front: { },
        back: this.deck.shift()
      });
    }

    this.showCards();
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

  /**
   * Show new cards from deck
   */
  showCards() {
    this.combinations.forEach(combination => {
      combination.front = combination.back;
      combination.back = this.deck.shift();
    });
  }

}
