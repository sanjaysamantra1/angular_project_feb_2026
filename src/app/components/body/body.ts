import { DirectiveAssignments } from './../directive-assignments/directive-assignments';
import { DatabindingAssignments } from '../databinding-assignments/databinding-assignments';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';
import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingDemo
    // DatabindingAssignments
    // DirectivesDemo
    ProductList,
    // DirectiveAssignments
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
