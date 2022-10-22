import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  public value = 0;

  public increment() {
    this.value++;
  }
}
