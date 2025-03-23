import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-item">      
      
        <h2>{{ product.name }}</h2>
        <div class="gallery" (click)="openGallery(product.images)">
          <img [src]="product.images[0]" alt="{{ product.name }}" />
        </div>
        <p>{{ product.description }}</p>
        <a [href]="product.link" target="_blank" rel="noopener noreferrer">View on Kaspi</a>
        <p>Rating: {{ product.rating }} ⭐</p>
        <button (click)="share(product.link, 'whatsapp')">Share on WhatsApp</button>
        <button (click)="share(product.link, 'telegram')">Share on Telegram</button>
        <button (click)="likeProduct()">Like ({{ product.likes }})</button>
        <button (click)="dislikeProduct()">Dislike </button>
      </div>
      <div *ngIf="showGallery" class="modal" (click)="closeGallery()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <span class="close" (click)="closeGallery()">&times;</span>
        <img [src]="selectedImage" class="modal-image" />
        <div class="thumbnails">
          <img *ngFor="let img of galleryImages" [src]="img" (click)="selectedImage = img" />
        </div>
      </div>
    </div>
    
  `,
   styleUrls: ['./product-item.component.css',]
})
export class ProductItemComponent {
  @Input() product!: Product; 

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.product = history.state.product;
    });
  }
  
  likeProduct() {
    if (!this.product.isLiked){
      this.product.likes+=1;
      if (this.product.isDisliked){
        this.product.isDisliked = false;
        this.product.likes+=1;
      }
    }
    this.product.isLiked = true;
  }
  
  dislikeProduct(){
    if (!this.product.isDisliked){
      this.product.likes--;
      if (this.product.isLiked){
        this.product.likes--;
        this.product.isLiked = false;
      }
    }
    this.product.isDisliked = true;
  }
  
  share(link: string, platform: string) {
      let shareUrl = '';
      if (platform === 'whatsapp') {
        shareUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
      } else if (platform === 'telegram') {
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
      }
      window.open(shareUrl, '_blank');
    }
    showGallery = false;
    selectedImage = '';
    galleryImages: string[] = [];
    currentImageIndex = 0;
  
    openGallery(images: string[]) {
      this.galleryImages = images;
      this.currentImageIndex = 0;
      this.selectedImage = images[this.currentImageIndex];
      this.showGallery = true;
    }
  
    closeGallery() {
      this.showGallery = false;
    }
  
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      if (this.showGallery) {
        if (event.key === 'ArrowRight') {
          this.nextImage();
        } else if (event.key === 'ArrowLeft') {
          this.prevImage();
        } else if (event.key === 'Escape') {
          this.closeGallery();
        }
      }
    }
  
    nextImage() {
      if (this.currentImageIndex < this.galleryImages.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0; // Loop back to first image
      }
      this.selectedImage = this.galleryImages[this.currentImageIndex];
    }
  
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.galleryImages.length - 1; // Loop to last image
      }
      this.selectedImage = this.galleryImages[this.currentImageIndex];
    }
    
}
