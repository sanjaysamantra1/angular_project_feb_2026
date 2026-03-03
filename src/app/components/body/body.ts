import { DatabindingAssignments } from '../databinding-assignments/databinding-assignments';
import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingDemo
    DatabindingAssignments
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
