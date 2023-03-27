import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart",
  templateUrl: `./cart.component.html`,
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = { items: [] };

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    "product",
    "name",
    "price",
    "quantity",
    "total",
    "action",
  ];

  constructor(private readonly _cartService: CartService) {}

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(items: CartItem[]): number {
    return this._cartService.getTotal(items);
  }

  onClearCart() {
    this._cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem): void {
    this._cartService.removeItem(item);
  }

  onAddQuantity(item: CartItem): void {
    this._cartService.addToCart(item);
  }

  onLowerQuantity(item: CartItem): void {
    this._cartService.lowerQuantity(item);
  }
}
