import { Component } from '@angular/core';
import product_data from './product_data';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = product_data;
  categorySet = new Set();

  constructor() {
    this.categorySet.add('all');
    for (let product of product_data) {
      this.categorySet.add(product.category)
    }
    console.log(this.categorySet)
  }

  filterProducts(event: any) {
    const selectedCategory = event.target.value;
    this.productArr = product_data.filter(product => {
      if (selectedCategory === 'all') {
        this.productArr = product_data;
      } else {
        this.productArr = product_data.filter(product => product.category === selectedCategory)
      }
    })
  }
}
