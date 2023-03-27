import { Component } from "@angular/core";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: `home.component.html`,
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) {}

  onColumnsCountChange(value: number): void {
    this.cols = value;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategoryChange(value: string): void {
    this.category = value;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  //TODO: remove
  products = [
    {
      id: 1,
      title: "Sneakers",
      price: 200,
      category: "Shoes",
      description: "Nice",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "T-shirt",
      price: 100,
      category: "Shirts",
      description: "Nice",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Hoodie",
      price: 250,
      category: "Shirts",
      description: "Nice",
      image: "https://via.placeholder.com/150",
    }
  ]
}
