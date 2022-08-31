import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsTableComponent } from './products-table/products-table.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductsTableComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProductsModule { }
