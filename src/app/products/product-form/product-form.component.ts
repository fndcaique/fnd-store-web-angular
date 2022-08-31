import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Product } from '../model/product';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    quantity: [0]
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ProductsService,
    private dialog: MatDialog,
    private location: Location,
  ) { }

  ngOnInit(): void { }

  onSubmit() {
    this.service.create(this.form.value as Product).subscribe({
      next: result => this.location.back(),
      error: error => {
        this.dialog.open(ErrorDialogComponent, { data: 'Error on create product' });
      },
      complete: () => console.log('completed'),

    });
  }

  onCancel() {
    this.location.back();
  }

}
