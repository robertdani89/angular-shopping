import { Component, Input } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.components.html",
  styles: [],
})
export class HeaderComponent {
  private _cart: Cart = { items: [] };
  itemsQuantity = 0;

  @Input()
  get cart() {
    return this._cart;
  }

  set cart(value: Cart) {
    this._cart = value;
    this.itemsQuantity = value.items
      .map((i) => i.quantity)
      .reduce((p, c) => p + c, 0);
  }

  constructor(private readonly _cartService: CartService) {}

  getTotal(items: CartItem[]): number {
    return this._cartService.getTotal(items);
  }

  onEmptyCart() {
    this._cartService.clearCart();
  }
}
