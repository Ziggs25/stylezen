import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { addIcons } from "ionicons";
import { cartOutline, heartOutline } from "ionicons/icons";

@Component({
  selector: 'app-product',
  templateUrl: 'product.page.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonBackButton, IonTitle, IonIcon, IonContent, CommonModule]
})
export class ProductPage {
  product = {
    name: "AIRism Cotton Crew Neck Long Sleeve T-Shirt",
    price: 250,
    description:
      "Your personal style, perfected. This AIRism Cotton Crew Neck Long Sleeve T-Shirt combines comfort and style for everyday wear.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"],
    rating: 4.5,
    reviewCount: 128,
    images: [
      "assets/images/cotton-tshirt.png",
      "/placeholder.svg?height=500&width=400",
      "/placeholder.svg?height=500&width=400",
    ],
  }

  constructor() {
    addIcons({
      'star': "assets/icon/star-rating-filled.svg",
      heartOutline,
      cartOutline
    })
  }
}
