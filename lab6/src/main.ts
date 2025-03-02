import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./app/components/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./app/components/about/about.component').then(m => m.AboutComponent) },
      { path: 'albums', loadComponent: () => import('./app/components/albums/albums.component').then(m => m.AlbumsComponent) },
      { path: 'albums/:id', loadComponent: () => import('./app/components/album-detail/album-detail.component').then(m => m.AlbumDetailComponent) },
      { path: 'albums/:id/photos', loadComponent: () => import('./app/components/album-photos/album-photos.component').then(m => m.AlbumPhotosComponent) },
    ]),
    provideHttpClient()
  ]
});
