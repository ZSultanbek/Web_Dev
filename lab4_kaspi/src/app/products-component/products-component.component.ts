import { Component , HostListener} from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  template: `
    <div class="products">
      <div *ngFor="let product of products" class="product">
        <h2>{{ product.name }}</h2>
        <div class="gallery" (click)="openGallery(product.images)">
          <img [src]="product.images[0]" alt="{{ product.name }}" />
        </div>
        <p>{{ product.description }}</p>
        <a [href]="product.link" target="_blank" rel="noopener noreferrer">View on Kaspi</a>
        <p>Rating: {{ product.rating }} ⭐</p>
        <button (click)="share(product.link, 'whatsapp')">Share on WhatsApp</button>
        <button (click)="share(product.link, 'telegram')">Share on Telegram</button>
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
  styleUrls: ['./products-component.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Великие мужские Трусы',
      description: 'Трусы которые достойны надевать только великие защитники Шымкента',
      rating: 4.8,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5b/h37/64775419658270.jpg?format=gallery-large'],
      link: 'https://kaspi.kz/shop/p/boksery-berrak-tekstil-1097-bordovyi-m-101501584/?c=710000000'
    },
    {
      name: 'Пижама California Girls Sharks',
      description: 'Don\'t be scared CameraMan, join them too!',
      rating: 5.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf8/h8c/84801870856222.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/hf6/84801870921758.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/hd7/84801870987294.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h4e/84801871052830.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/kigurumi-kigurumi-vkz-166858-seryi-128-134-115714627/?c=511010000&hasVariants=true&ref=shared_link'
    },
    {
      name: 'Бойцовский Ринг',
      description: 'Первое правило бойцовского клуба: не упоминать о бойцовском клубе',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/paf/p18/20140228.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/green-hill-olimpiiskii-sinii-133440793/?c=710000000'
    },
    {
      name: 'ТриплФолд Смартфон',
      description: 'Только не согни с неправильной стороны...',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p2a/17575214.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p1f/17575211.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pae/p26/17575213.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-132696625/?c=710000000'
    },
    {
      name: 'Professional Gaming Mouse',
      description: 'Professional Mouse to play Overwatch 2, Marvel Rivals, CS2, Minecraft, Roblox, Terraria and Sims 4',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h13/hfd/81380453580830.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/razer-viper-ultimate-with-charging-dock-rozovyi-110954253/?c=710000000'
    },
    {
      name: 'Les Paul electro guitar',
      description: 'Cort guitar for electro guitar playes that watched K-ON! anime series',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hdb/h90/63768939823134.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/hee/63768940740638.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4c/63768941559838.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5a/hb7/63768942149662.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/cort-cr250-vb-brown-14200024/?c=710000000'
    },
    {
      name: 'Sport Power Иглбол SP черный',
      description: 'Отличный массажёр для стоп. В меру твердый, каким и должен быть не выходя из дома.',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hda/h0b/69529618710558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hee/h5c/69529619234846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h14/69529621856286.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sport-power-iglbol-sp-chernyi-109120162/?c=710000000'
    },
    {
      name: 'Мотоцикл CF Moto 800NK ABS черный',
      description: 'Pараллельный двигатель объемом 799куб.см имеет мощность более 100 лошадиных сил',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h30/hcf/86180460560414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/h85/86180460691486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h4b/86180460986398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h6b/86180461314078.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/mototsikl-cf-moto-800nk-abs-chernyi-120013035/?c=710000000'
    },  
    {
      name: 'MOST expensive slippers on kaspi',
      description: 'скорее всего это скам и этот товар скоро уберут',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p05/pcb/10108204.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/tapochki-fivab-0707-haki-40-41-130548436/?c=710000000'
    },  
    {
      name: 'Тостер',
      description: 'тостер',
      rating: 5.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h4c/h74/64531359596574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h25/h3b/64531428179998.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/backercraft-eg-4ats-serebristyi-105637078/?c=710000000'
    }, 
  ];

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