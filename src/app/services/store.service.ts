import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product.model";

const STORE_BASE_URL = "https://fakestoreapi.com";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  constructor(private readonly _http: HttpClient) {}

  public getAllProducts(
    limit = 20,
    sort = "desc",
    category?: string
  ): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${STORE_BASE_URL}/products${
        category ? `/category/${category}` : ""
      }?sort=${sort}&limit=${limit}`
    );
  }

  public getAllCategories(): Observable<string[]> {
    return this._http.get<string[]>(`${STORE_BASE_URL}/products/categories`);
  }
}
