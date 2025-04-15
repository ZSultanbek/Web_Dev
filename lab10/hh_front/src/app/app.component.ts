import { Component } from '@angular/core';
// import { HttpClient, provideHttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CompanyListComponent } from './components/company-list/company-list.component';

@Component({
  selector: 'app-root',
  imports: [CompanyListComponent],
  template: `<div class="container">
  <h1>HH.kz</h1>
  <app-company-list></app-company-list>
</div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
