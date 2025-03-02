import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  template: `
    <div *ngIf="photos.length">
  <h2>Album Photos</h2>
  <div class="photos-container">
    <img *ngFor="let photo of photos" [src]="photo.thumbnailUrl" [alt]="photo.title" />
  </div>
  <button (click)="goBack()">Return</button>
</div>

  `,
  styles: [
    `div { padding: 20px; text-align: center; }`,
    `.photos-container { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }`,
    `img { width: 150px; height: 150px; object-fit: cover; border-radius: 5px; }`,
    `button { margin-top: 20px; padding: 5px 10px; cursor: pointer; }`
  ]
})
export class AlbumPhotosComponent implements OnInit {
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumPhotos(albumId).subscribe(data => {
      console.log("Fetched Photos:", data); // Debugging
      this.photos = data;
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}
