import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    {
      name: 'Sport',
      products: [
        {
          name: 'Бойцовский Ринг',
          description: 'Первое правило бойцовского клуба: не упоминать о бойцовском клубе',
          rating: 0.0,
          images: ['https://resources.cdn-kaspi.kz/img/m/p/paf/p18/20140228.jpeg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/green-hill-olimpiiskii-sinii-133440793/?c=710000000',
          likes: 0,
          isLiked: false,
          isDisliked: false
        },
        {
          name: 'Sport Power Иглбол SP черный',
          description: 'Отличный массажёр для стоп. В меру твердый, каким и должен быть не выходя из дома.',
          rating: 0.0,
          images: ['https://resources.cdn-kaspi.kz/img/m/p/hda/h0b/69529618710558.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hee/h5c/69529619234846.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hea/h14/69529621856286.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/sport-power-iglbol-sp-chernyi-109120162/?c=710000000',
          likes: 0, 
          isLiked: false,
          isDisliked: false
        },]
    },
    {
      name: 'Transport',
      products: [
        {
          name: 'Мотоцикл CF Moto 800NK ABS черный',
          description: 'Pараллельный двигатель объемом 799куб.см имеет мощность более 100 лошадиных сил',
          rating: 0.0,
          images: ['https://resources.cdn-kaspi.kz/img/m/p/h30/hcf/86180460560414.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h24/h85/86180460691486.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h53/h4b/86180460986398.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h88/h6b/86180461314078.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/mototsikl-cf-moto-800nk-abs-chernyi-120013035/?c=710000000',
          likes: 0,
          isLiked: false,
          isDisliked: false
        },  ]
    },
    {
      name: 'Electronics',
      products: [
      {
        name: 'ТриплФолд Смартфон',
        description: 'Только не согни с неправильной стороны...',
        rating: 0.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p2a/17575214.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pdb/p1f/17575211.jpeg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pae/p26/17575213.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/huawei-mate-xt-ultimate-16-gb-1024-gb-krasnyi-132696625/?c=710000000',
        likes: 0,
        isLiked: false,
        isDisliked: false
      },
      {
        name: 'Professional Gaming Mouse',
        description: 'Professional Mouse to play Overwatch 2, Marvel Rivals, CS2, Minecraft, Roblox, Terraria and Sims 4',
        rating: 0.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h13/hfd/81380453580830.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/razer-viper-ultimate-with-charging-dock-rozovyi-110954253/?c=710000000',
        likes: 0,
        isLiked: false,
        isDisliked: false
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
        link: 'https://kaspi.kz/shop/p/cort-cr250-vb-brown-14200024/?c=710000000',
        likes: 0,
        isLiked: false,
        isDisliked: false
      },
      {
        name: 'Тостер',
        description: 'тостер',
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h4c/h74/64531359596574.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h25/h3b/64531428179998.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/backercraft-eg-4ats-serebristyi-105637078/?c=710000000',
        likes: 0,
        isLiked: false,
        isDisliked: false
      }, 
      ],},
      {
      name: "Home Things",
      products:[
        {
          name: 'Пижама California Girls Sharks',
          description: 'Don\'t be scared CameraMan, join them too!',
          rating: 5.0,
          images: ['https://resources.cdn-kaspi.kz/img/m/p/hf8/h8c/84801870856222.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hf6/hf6/84801870921758.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h04/hd7/84801870987294.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/he2/h4e/84801871052830.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/kigurumi-kigurumi-vkz-166858-seryi-128-134-115714627/?c=511010000&hasVariants=true&ref=shared_link',
          likes: 0,
          isLiked: false,
          isDisliked: false
        }, 
        {
        name: 'Великие мужские Трусы',
        description: 'Трусы которые достойны надевать только великие защитники Шымкента',
        rating: 4.8,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h5b/h37/64775419658270.jpg?format=gallery-large'],
        link: 'https://kaspi.kz/shop/p/boksery-berrak-tekstil-1097-bordovyi-m-101501584/?c=710000000',
        likes: 0,
        isLiked: false,
        isDisliked: false
      },
        {
          name: 'MOST expensive slippers on kaspi',
          description: 'скорее всего это скам и этот товар скоро уберут',
          rating: 0.0,
          images: ['https://resources.cdn-kaspi.kz/img/m/p/p05/pcb/10108204.jpeg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/tapochki-fivab-0707-haki-40-41-130548436/?c=710000000',
          likes: 0,
          isLiked: false,
          isDisliked: false
        },  
        
      ]
    },
  ];

  getProductsByCategory(categoryName: string): Product[] {
    return this.categories.find(c => c.name === categoryName)?.products || [{
      name: 'Sport Power Иглбол SP черный',
      description: 'Отличный массажёр для стоп. В меру твердый, каким и должен быть не выходя из дома.',
      rating: 0.0,
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hda/h0b/69529618710558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hee/h5c/69529619234846.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hea/h14/69529621856286.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sport-power-iglbol-sp-chernyi-109120162/?c=710000000',
      likes: 0, 
      isLiked: false,
      isDisliked: false
    },];
  }
  
  getCategories(){
    return this.categories;
  }
}
