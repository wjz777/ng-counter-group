import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: {num: number}[] = [
    {num: 1},
    {num: 2},
    {num: 3}
  ]

  get sum(){
    return this.counters.reduce(
      (result, current) => result + current.num, 0)
  }

  onAdd(){
    this.counters.push({num: 0})
  }

  removeCounter(id: number) {
    this.counters = this.counters.filter((_, i) => i !== id);
  }

  Reset(){
    this.counters.forEach(Element => {
      Element.num = 0
    });
  }
}
