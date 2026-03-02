import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [
    DatabindingDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
