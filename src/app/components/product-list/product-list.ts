import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-product-list',
  imports: [FontAwesomeModule, NgxPaginationModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  p = 1;
  faStar = faStar;
  productArr = product_data;
  categorySet = new Set();

  constructor() {
    this.categorySet.add('all');
    for (let product of product_data) {
      this.categorySet.add(product.category);
    }
    console.log(this.categorySet);
  }

  filterProducts(event: any) {
    const selectedCategory = event.target.value;
    this.productArr = product_data.filter((product) => {
      return selectedCategory === 'all' || product.category === selectedCategory;
    });
  }

  searchProducts(event: any) {
    const searchText = event.target.value;
    this.productArr = product_data.filter((product) => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    });
  }

  sortAsc() {
    this.productArr.sort((p1, p2) => p1.price - p2.price);
  }
  sortDesc() {
    this.productArr.sort((p1, p2) => p2.price - p1.price);
  }
}
