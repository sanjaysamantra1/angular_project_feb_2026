import { DatabindingAssignments } from '../databinding-assignments/databinding-assignments';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingDemo
    // DatabindingAssignments
    DirectivesDemo
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
