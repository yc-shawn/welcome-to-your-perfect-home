import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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
  numbers = new Array(9).fill('');

  constructor() { }

  ngOnInit() {
    this.choosedNumber = this.selectedHouse.value || 0;
    this.addPool = this.selectedHouse.addPool || false;
  }

  onNumber(selected: number) {
    if (this.choosedNumber === 1) {
      this.choosedNumber = 10 + selected;
    } else {
      this.choosedNumber = selected;
    }
  }

  onClear() {
    this.choosedNumber = 0;
    this.addPool = false;
    this.clear.emit();
  }

  onConfirm() {
    this.numberSelected.emit({
      choosedNumber: this.choosedNumber,
      addPool: this.addPool
    });
    this.choosedNumber = 0;
    this.addPool = false;
  }

}
