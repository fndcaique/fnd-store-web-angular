import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ProductsService,
    private dialog: MatDialog,
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      quantity: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe({
      next: result => console.log(result),
      error: error => {
        this.dialog.open(ErrorDialogComponent, { data: 'Error on create product' });
      }
    });
  }

  onCancel() {

  }

}
