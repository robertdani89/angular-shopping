import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Product } from "src/app/models/product.model";
import { CartService } from "src/app/services/cart.service";
import { StoreService } from "src/app/services/store.service";

const ROWS_HEIGHT: { [id: number]: number } = { 1: 260, 3: 335, 4: 350 };

@Component({
  selector: "app-home",
  templateUrl: `home.component.html`,
})
export class HomeComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;
  products?: Product[];
  sort = "desc";
  limit = 12;
  productsSub?: Subscription;

  constructor(
    private cartService: CartService,
    private readonly _storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }

  onColumnsCountChange(value: number): void {
    this.cols = value;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onSortChange(value: string): void {
    this.sort = value;
    this.getProducts();
  }

  onItemsCountChange(value: number): void {
    this.limit = value;
    this.getProducts();
  }

  onShowCategoryChange(value: string): void {
    this.category = value;
    this.getProducts();
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

  getProducts(): void {
    this.productsSub = this._storeService
      .getAllProducts(this.limit, this.sort, this.category)
      .subscribe((val) => {
        this.products = val;
      });
  }
}
