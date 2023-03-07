import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: `products-header.component.html`,
})
export class ProductsHeaderComponent {
  @Output()
  columnsCountChange = new EventEmitter<number>();
  
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(value: string): void {
    this.sort = value;
  }

  onItemCountUpdated(value: number): void {
    this.itemsShowCount = value;
  }

  onColumnsUpdated(value: number): void {
    this.columnsCountChange.emit(value);
  }
}
