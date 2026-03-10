import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom-pipes/remaining-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'SacHIn teNdUlKAr';
  salary = 5000;
  dateObj = new Date();
  user = { sal: 5000, name: 'Ajit', age: 22, add: 'Hyderabad', gender: 'male' };
  cars = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];
  msg = 'Hello';
}
