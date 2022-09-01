import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  isLoading = true;
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'quantity', 'actions'];


  constructor(
    private service: ProductsService,
    public dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    this.service.findAll().subscribe({
      next: (data) => { this.products = data; this.isLoading = false },
      error: error => this.onError('Error on load products')
    })
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    })
  }

  onDelete(product: Product) {
    this.service.delete(product.id).subscribe({
      next: (resp) => {
        this.products = this.products.filter(p => p.id !== product.id)
      },
      error: (error) => {
        this.onError('Error on delete ' + product.name);
        console.error(error);
      },
    });
  }

}
