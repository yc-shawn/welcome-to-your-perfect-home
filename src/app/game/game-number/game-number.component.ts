import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UtilService } from '@app/_core/services/util.service';

@Component({
  selector: 'app-game-number',
  templateUrl: './game-number.component.html',
  styleUrls: ['./game-number.component.scss']
})
export class GameNumberComponent implements OnInit {
  @Output() readonly clear = new EventEmitter();
  @Output() readonly numberSelected = new EventEmitter();
  @Input() readonly selectedHouse: any;

  choosedNumber = 0;
  addPool = false;
  addRoundAbout = false;
  digits = new Array(9).fill('');

  constructor(public util: UtilService) { }

  /**
   * Reset choosedNumber and addPool value
   *
   * @override
   */
  ngOnInit() {
    this.choosedNumber = this.selectedHouse.value || 0;
    this.addPool = this.selectedHouse.addPool || false;
  }

  /**
   * Update number base on given digit
   *
   * @param digit - Selected digit
   */
  onDigit(digit: number) {
    if (this.choosedNumber === 1) {
      this.choosedNumber = 10 + digit;
    } else {
      this.choosedNumber = digit;
    }
  }

  /**
   * Clear the current number
   */
  onClear() {
    this.choosedNumber = 0;
    this.addPool = false;
    this.addRoundAbout = false;
    this.clear.emit();
  }

  /**
   * Confirm current number and pool status
   */
  onConfirm() {
    this.numberSelected.emit({
      choosedNumber: this.choosedNumber,
      addPool: this.addPool,
      addRoundAbout: this.addRoundAbout,
    });
    this.choosedNumber = 0;
    this.addPool = false;
    this.addRoundAbout = false;
  }

}
