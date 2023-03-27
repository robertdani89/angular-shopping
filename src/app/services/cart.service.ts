import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { Cart, CartItem } from "../models/cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((i) => i.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open(`1 item added to cart.`, "Ok", { duration: 2000 });
  }

  getTotal(items: CartItem[]): number {
    return items.reduce((p, c) => p + c.price * c.quantity, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open("Cart is empty.", "Ok", { duration: 2000 });
  }

  removeItem(item: CartItem): void {
    const filtered = this.cart.value.items.filter((x) => x.id !== item.id);
    this.cart.next({ items: filtered });
    this._snackBar.open("Removed item from cart.", "Ok", { duration: 2000 });
  }

  lowerQuantity(item: CartItem): void {
    const _item = this.cart.value.items.find((x) => x.id === item.id);
    if (!_item) return;
    _item.quantity--;

    if (_item.quantity === 0) {
      this.removeItem(item);
    } else {
      this._snackBar.open("Removed item from cart.", "Ok", { duration: 2000 });
    }
  }
}
