import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Home: Shows categories
  { path: 'products/:categoryName', component: ProductListComponent }, // Shows products of a category
  { path: 'product/:productName', component: ProductItemComponent }, // Shows product
  { path: '**', redirectTo: '' }, // Redirect unknown routes to home
];
