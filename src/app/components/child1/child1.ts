import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  imports: [],
  templateUrl: './child1.html',
  styleUrl: './child1.css',
  inputs: ['a', 'b'],
  outputs:['carsEvent']
})
export class Child1 {
  a: any;
  b: any;
  cars = ['Tata', 'Honda', 'maruti'];

  carsEvent = new EventEmitter();
  sendDataToParent() {
    this.carsEvent.emit(this.cars);
  }

  constructur() {
    console.log('Child1 Constructor');
  }
  ngOnChanges() {
    console.log('Child1 ngOnChanges');
  }
  ngOnInit() {
    console.log('Child1 ngOnInit');
  }
}
