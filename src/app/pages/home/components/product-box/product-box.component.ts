import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: `product-box.component.html`,
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "Sneakers",
    price: 200,
    category: "Shoes",
    description: "Nice",
    image: "https://via.placeholder.com/150",
  };

  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
