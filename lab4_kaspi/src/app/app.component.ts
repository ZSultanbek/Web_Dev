import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductItemComponent } from './product-item/product-item.component';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductItemComponent, CommonModule],
  template:  `
  <div class="homepage">
      <h1>Categories</h1>
      <nav *ngFor="let category of categories" (click)="goToCategory(category)" class="categories">
          {{ category.name }}
</nav>
    </div>
    
    <router-outlet></router-outlet>
  `,
   styleUrls: ['./app.component.css',]
})
export class AppComponent {
  constructor(private productService: ProductService, private router: Router) {}
  
  
  categories: Category[] = [];

  selectedCategory: Category | null = null;

  ngOnInit() {
    this.categories = this.productService.getCategories();
  }
  
  goToCategory(category: Category) {
    this.router.navigate(['/products', category.name], { state: { products: category.products } });
  }
  
  
}

