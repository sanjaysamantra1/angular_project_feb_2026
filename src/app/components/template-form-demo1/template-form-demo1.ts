import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-demo1',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form-demo1.html',
  styleUrl: './template-form-demo1.css',
})
export class TemplateFormDemo1 {
  myForm = {
    firstName: 'sanjay',
    lastName: 'samantra',
  };

  submitMyForm(formData: NgForm) {
    console.log(formData);
  }
}
