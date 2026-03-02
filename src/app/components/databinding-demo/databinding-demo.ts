import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding-demo',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding-demo.html',
  styleUrl: './databinding-demo.css',
})
export class DatabindingDemo {
  name: string = 'Virat Kohli';
  img_url: string = 'https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png';
  flag: boolean = true;

  toggleFlag() {
    this.flag = !this.flag;
  }
}
