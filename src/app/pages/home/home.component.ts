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
}
