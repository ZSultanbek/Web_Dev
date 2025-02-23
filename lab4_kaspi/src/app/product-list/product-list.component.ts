import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `
  <h1>AAAAAAAAAAAAAAAAAA</h1>
  <div class="products">
      <div *ngFor="let product of products" class="product">
        <h2>{{ product.name }}</h2>
        <div class="gallery" (click)="goToProduct(product)">
          <img [src]="product.images[0]" alt="{{ product.name }}" />
        </div>
        <p>{{ product.description }}</p>
        <a [href]="product.link" target="_blank" rel="noopener noreferrer">View on Kaspi</a>
        <p>Rating: {{ product.rating }} ⭐</p>
        <button (click)="removeProduct(product)">Remove</button>
      </div>
      
      
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  categoryName: string = '';
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryName = params['categoryName'];
      this.products = this.productService.getProductsByCategory(this.categoryName);
    });
  }

  removeProduct(product: Product) {
    this.products = this.products.filter(p => p !== product);
  }
  goToProduct(product: Product) {
      this.router.navigate(['/product', product.name], { state: { product} });
    }
}
