import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  httpClient = inject(HttpClient);
  productArr: any = signal([]);
  isLoading = signal(false);

  ngOnInit() {}

  fetchProducts() {
    this.isLoading.set(true);
    this.httpClient.get('ttps://fakestoreapi.com/products').subscribe((response) => {
      this.productArr.set(response);
      this.isLoading.set(false);
    });
  }
}
