import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  userName = 'Shawn';

  selectedHouse = null;

  streets: any[] = [
    { amount: 10, top: 9.5, poolIndex: [2, 3, 7] },
    { amount: 11, top: 27.3, poolIndex: [3, 7, 10] },
    { amount: 12, top: 45.2, poolIndex: [1, 5, 10] },
  ];

  pools: any[] = [
    { amount: 5, left: 21.9 },
    { amount: 4, left: 24.9 }
  ];

  agencies: any[] = [
    { amount: 4, left: 32.1, offset: 0 },
    { amount: 3, left: 34.1, offset: 67 },
    { amount: 4, left: 36.1, offset: 0 }
  ];

  estates: any[] = [
    { amount: 1, left: 44.5, offset: 0 },
    { amount: 2, left: 49.15, offset: -54 },
    { amount: 3, left: 53.4, offset: -117 },
    { amount: 4, left: 57.9, offset: -172 },
    { amount: 4, left: 62.5, offset: -227 },
    { amount: 4, left: 66.8, offset: -279 }
  ];

  bises: any[] = [
    { amount: 5, left: 74.9 },
    { amount: 4, left: 78.4 }
  ];

  roundAbout: any = { amount: 2, left: 85.2 };

  refusal: any = { amount: 3, left: 85.2 };

  constructor() { }

  ngOnInit() {
    this.streets.forEach(street => {
      street.houses = this._generateSlot(street.amount);
      street.fences = this._generateSlot(street.amount - 1);
      street.parks = this._generateSlot(street.amount - 7);
    });

    this.pools.forEach(pool => {
      pool.slots = this._generateSlot(pool.amount);
    });

    this.agencies.forEach(agency => {
      agency.slots = this._generateSlot(agency.amount);
    });

    this.estates.forEach(estate => {
      estate.slots = this._generateSlot(estate.amount);
    });

    this.bises.forEach(bis => {
      bis.slots = this._generateSlot(bis.amount);
    });

    this.roundAbout.slots = this._generateSlot(this.roundAbout.amount);
    this.refusal.slots = this._generateSlot(this.refusal.amount);
  }

  onHouse(house, street, index: number) {
    this.selectedHouse = house;
    this.selectedHouse.canPool = street.poolIndex.includes(index);
  }

  onHouseNumberCleared() {
    this.selectedHouse.value = null;
    this.selectedHouse = null;
  }

  onHouseNumberSelected({ choosedNumber, addPool}) {
    this.selectedHouse.value = choosedNumber;
    this.selectedHouse.addPool = addPool;
    this.selectedHouse = null;
  }

  /**
   * Mark given slot
   *
   * @param slot - Slot object
   */
  onMark(slot) {
    slot.marked = !slot.marked;
  }

  /**
   * Generate array of slots
   *
   * @param amount - Numher of slots
   */
  private _generateSlot(amount: number): any[] {
    const slots = [];
    for (let index = 0; index < amount; index++) {
      slots.push(new Object());
    }
    return slots;
  }

}
