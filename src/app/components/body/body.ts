import { EmployeeCrud } from './../employee-crud/employee-crud';
import { PipesDemo } from './../pipes-demo/pipes-demo';
import { DirectiveAssignments } from './../directive-assignments/directive-assignments';
import { DatabindingAssignments } from '../databinding-assignments/databinding-assignments';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';
import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';
import { Parent } from '../parent/parent';
import { Demo1 } from '../demo1/demo1';
import { Demo2 } from '../demo2/demo2';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingDemo
    // DatabindingAssignments
    // DirectivesDemo
    // ProductList,
    // DirectiveAssignments
    // PipesDemo
    // Parent
    // EmployeeCrud
    Demo1,
    Demo2,
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  flag: boolean = true;
}
