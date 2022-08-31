import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';
import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns = ['id', 'name', 'quantity'];


  constructor(
    private productsService: ProductsService,
    public dialog: MatDialog
  ) {
    /* TODO document why this constructor is empty */
    this.products$ = this.productsService.findAll()
      .pipe(
        catchError(error => {
          this.onError('Error on load products')
          return of([]);
        })
      );
  }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    })
  }

}
