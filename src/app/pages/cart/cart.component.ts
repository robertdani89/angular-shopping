import { Component, OnInit } from "@angular/core";
import { Cart, CartItem } from "src/app/models/cart.model";

@Component({
  selector: "app-cart",
  templateUrl: `./cart.component.html`,
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        product: "https://via.placeholder.com/150",
        name: "Sneakers",
        price: 150,
        quantity: 1,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Sneakers",
        price: 150,
        quantity: 2,
        id: 1,
      },
      {
        product: "https://via.placeholder.com/150",
        name: "Sneakers",
        price: 200,
        quantity: 3,
        id: 1,
      },
    ],
  };

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    "product",
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return items.reduce((p, c) => p + c.price * c.quantity, 0);
  }
}
