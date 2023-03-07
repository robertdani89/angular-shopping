import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-filters",
  templateUrl: `filters.component.html`,
})
export class FiltersComponent {
  @Output()
  showCategory = new EventEmitter<string>();
  
  
  categories = ['shoes', 't-shirts'];

  onShowCategory(value: string): void {
    this.showCategory.emit(value);
  }
}
