import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';  // Import your routes configuration

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // <-- Add router configuration here
  ]
})
  .catch((err) => console.error(err));
