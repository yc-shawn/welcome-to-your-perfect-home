import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  /**
   * ngFor trackBy function, track by index
   *
   * @param index - Item's index
   */
  trackByIndex(index: number) {
    return index;
  }
}
