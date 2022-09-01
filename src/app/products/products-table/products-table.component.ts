import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

import { Product } from './../model/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent {

  @Output() delete = new EventEmitter<Product>();
  @Input() products: Product[] = [];
  readonly displayedColumns = ['id', 'name', 'quantity', 'actions'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: ProductsService,
  ) { }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.activatedRoute });
  }

  onDelete(product: Product) {
    this.delete.emit(product);
  }

}
