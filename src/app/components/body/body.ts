import { EmployeeCrud } from './../employee-crud/employee-crud';
import { PipesDemo } from './../pipes-demo/pipes-demo';
import { DirectiveAssignments } from './../directive-assignments/directive-assignments';
import { DatabindingAssignments } from '../databinding-assignments/databinding-assignments';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { ProductList } from '../product-list/product-list';
import { DatabindingDemo } from './../databinding-demo/databinding-demo';
import { Component } from '@angular/core';
import { Parent } from '../parent/parent';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingDemo
    // DatabindingAssignments
    // DirectivesDemo
    // ProductList,
    // DirectiveAssignments
    // PipesDemo
    Parent
    // EmployeeCrud
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
