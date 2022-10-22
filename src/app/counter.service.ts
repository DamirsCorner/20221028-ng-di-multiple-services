import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  public value = 0;

  public increment() {
    this.value++;
  }
}
