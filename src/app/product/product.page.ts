import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { cartOutline, heartOutline } from "ionicons/icons";

const sizes = ["S", "S", "M", "L", "XL"]

interface Product {
  id: number
  title: string
  category: string
  size: string
  sizes?: string[],
  price: number
  rating: number
  image: string
  isFavorite: boolean
}

let products: Product[] = [
  {
    id: 1,
    title: 'Cotton Baggy Pants',
    category: 'UNISEX',
    size: 'S-XL',
    sizes: sizes,
    price: 790,
    rating: 5.0,
    image: 'assets/images/cotton-baggy-pants.png',
    isFavorite: false
  },
  {
    id: 2,
    title: 'AIRism Cotton Crew Neck Long Sleeve T-Shirt',
    category: 'UNISEX',
    size: 'S-XL',
    sizes: sizes,
    price: 990,
    rating: 5.0,
    image: 'assets/images/airism-cotton-tshirt.png',
    isFavorite: false
  },
  {
    id: 3,
    title: 'Cotton T-Shirt',
    category: 'MENS',
    size: 'S-XL',
    sizes: sizes,
    price: 690,
    rating: 3.0,
    image: 'assets/images/cotton-tshirt.png',
    isFavorite: false
  },
  {
    id: 4,
    title: "WOMEN'S SMART ANKLE PANTS 2WAY STRETCH",
    category: 'WOMENS',
    size: 'S-XL',
    sizes: sizes,
    price: 990,
    rating: 4.0,
    image: 'assets/images/womens-smart-ankle-pants.png',
    isFavorite: false
  },
  {
    id: 5,
    title: "WOMEN'S U CREW NECK SHORT SLEEVE T-SHIRT",
    category: 'WOMENS',
    size: 'S-XL',
    sizes: sizes,
    price: 780,
    rating: 5.0,
    image: 'assets/images/WOMENSUCREWNECKSHORTSLEEVET-SHIRT.png',
    isFavorite: false
  },
  {
    id: 6,
    title: "Rayon Skipper Collar 3/4 Sleeve Blouse",
    category: 'WOMENS',
    size: 'S-L',
    sizes: ["S", "S", "M", "L", "L"]
    ,
    price: 990,
    rating: 5.0,
    image: 'assets/images/RayonSkipperCollarSleeveBlouse.png',
    isFavorite: false
  }
];

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonIcon, IonContent, CommonModule]
})
export class ProductPage {
  product: Product = products[0]

  constructor(private router: ActivatedRoute) {
    addIcons({
      'star': "assets/icon/star-rating-filled.svg",
      heartOutline,
      cartOutline
    })
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      const p = params as { id: number }
      const product = products.find(product => product.id == p.id)

      if (product != undefined) {
        this.product = product
      }
    })
  }
}
