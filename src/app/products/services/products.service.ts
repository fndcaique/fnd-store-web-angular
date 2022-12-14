import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
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
      );
  }

  create(product: Partial<Product>) {
    return this.httpClient.post<Product>(this.API, product)
      .pipe(take(1));
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
