import { Component, OnInit } from '@angular/core';
import { UserService, UtilService } from '@app/_core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  selectedHouse = null;

  streets: any[] = [
    { numberOfSlots: 10, top: 9.5, poolIndex: [2, 3, 7] },
    { numberOfSlots: 11, top: 27.3, poolIndex: [3, 7, 10] },
    { numberOfSlots: 12, top: 45.2, poolIndex: [1, 5, 10] },
  ];

  pools: any[] = [
    { numberOfSlots: 5, left: 21.9 },
    { numberOfSlots: 4, left: 24.9 }
  ];

  agencies: any[] = [
    { numberOfSlots: 4, left: 32.1, offset: 0 },
    { numberOfSlots: 3, left: 34.1, offset: 67 },
    { numberOfSlots: 4, left: 36.1, offset: 0 }
  ];

  estates: any[] = [
    { numberOfSlots: 1, left: 44.5, offset: 0 },
    { numberOfSlots: 2, left: 49.15, offset: -54 },
    { numberOfSlots: 3, left: 53.4, offset: -117 },
    { numberOfSlots: 4, left: 57.9, offset: -172 },
    { numberOfSlots: 4, left: 62.5, offset: -227 },
    { numberOfSlots: 4, left: 66.8, offset: -279 }
  ];

  bises: any[] = [
    { numberOfSlots: 5, left: 74.9 },
    { numberOfSlots: 4, left: 78.4 }
  ];

  roundAbout: any = { numberOfSlots: 2, left: 85.2 };

  refusal: any = { numberOfSlots: 3, left: 85.2 };

  constructor(
    public user: UserService,
    public util: UtilService,
  ) { }

  /**
   * Initialize all the building blocks
   *
   * @override
   */
  ngOnInit() {
    this.streets.forEach(street => {
      street.houses = this._generateSlot(street.numberOfSlots);
      street.fences = this._generateSlot(street.numberOfSlots - 1);
      street.parks = this._generateSlot(street.numberOfSlots - 7);
    });

    this.pools.forEach(pool => {
      pool.slots = this._generateSlot(pool.numberOfSlots);
    });

    this.agencies.forEach(agency => {
      agency.slots = this._generateSlot(agency.numberOfSlots);
    });

    this.estates.forEach(estate => {
      estate.slots = this._generateSlot(estate.numberOfSlots);
    });

    this.bises.forEach(bis => {
      bis.slots = this._generateSlot(bis.numberOfSlots);
    });

    this.roundAbout.slots = this._generateSlot(this.roundAbout.numberOfSlots);
    this.refusal.slots = this._generateSlot(this.refusal.numberOfSlots);
  }

  /**
   * Open number entering dialog when select house
   * Dialog open when selectedHouse is not none
   *
   * @param house - House object
   * @param street - Street object
   * @param index - house index
   */
  onHouse(house, street, index: number) {
    this.selectedHouse = house;
    this.selectedHouse.canPool = street.poolIndex.includes(index);
  }

  /**
   * Clear selected house value
   * And reset selectedHouse
   */
  onHouseNumberCleared() {
    this.selectedHouse.value = null;
    this.selectedHouse = null;
  }

  /**
   * Update selected house info when number confirmed.
   *
   * @param choosedNumber
   * @param addPool - Whether to add pool
   */
  onHouseNumberSelected({ choosedNumber, addPool, addRoundAbout }) {
    this.selectedHouse.addPool = addPool;
    this.selectedHouse.addRoundAbout = addRoundAbout;
    if (!addRoundAbout) {
      this.selectedHouse.value = choosedNumber;
    }
    this.selectedHouse = null;
  }

  /**
   * Mark given slot
   *
   * @param slot - Slot object
   */
  onMark(slot: any) {
    slot.marked = !slot.marked;
  }

  /**
   * Generate array of slots
   *
   * @param numberOfSlots - Numher of slots
   */
  private _generateSlot(numberOfSlots: number): any[] {
    const slots = [];
    for (let index = 0; index < numberOfSlots; index++) {
      slots.push(new Object());
    }
    return slots;
  }

  /**
   * Automatically calcuate score after each actions
   */
  private _calculateScore() {
    // TODO
  }

}
