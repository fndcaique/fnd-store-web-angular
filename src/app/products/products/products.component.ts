import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 1
    }
  ];
  displayedColumns = ['id', 'name', 'quantity'];


  constructor() {
    /* TODO document why this constructor is empty */
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
