import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  constructor(public counterService: CounterService) {}

  public onClick() {
    this.counterService.increment();
  }
}
