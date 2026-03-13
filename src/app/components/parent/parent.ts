import { Component, OnChanges, OnInit } from '@angular/core';
import { Child2 } from '../child2/child2';
import { Child1 } from '../child1/child1';

@Component({
  selector: 'app-parent',
  imports: [Child1, Child2],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent implements OnChanges {
  a = 100;
  carsParent: any;

  receiveCarsData(carsFromChild: any) {
    this.carsParent = carsFromChild;
  }

  constructur() {
    console.log('Parent Constructor');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
}
