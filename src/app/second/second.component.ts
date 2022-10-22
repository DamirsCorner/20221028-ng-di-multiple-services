import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent {
  constructor(public counterService: CounterService) {}

  onClick() {
    this.counterService.increment();
  }
}
