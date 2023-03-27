import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "src/app/services/store.service";

@Component({
  selector: "app-filters",
  templateUrl: `filters.component.html`,
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();

  categories?: string[];
  categoriesSub?: Subscription;

  constructor(private readonly _service: StoreService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe();
  }

  onShowCategory(value: string): void {
    this.showCategory.emit(value);
  }

  getCategories() {
    this._service.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  }
}
