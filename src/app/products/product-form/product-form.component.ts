import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      quantity: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.create(this.form.value).subscribe(result => console.log(result)
    );
  }

  onCancel() {

  }

}
