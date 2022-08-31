import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly API = '/api/products';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return this.httpClient.get<Product[]>(this.API)
      .pipe(
        // first(),
        take(1),
        delay(2000),
        tap(products => console.log(products))
      );
  }

  create(product: Product) {
    return this.httpClient.post<Product>(this.API, product)
      .pipe(take(1));
  }
}
