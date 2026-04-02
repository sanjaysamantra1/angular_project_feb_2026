import { Component } from '@angular/core';
import {Heavy} from '../heavy/heavy'

@Component({
  selector: 'app-home',
  imports: [
    Heavy
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
