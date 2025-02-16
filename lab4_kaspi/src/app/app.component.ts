import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./products-component/products-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent],
  template: `
  <app-products
  ></app-products>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab4_kaspi';
}
