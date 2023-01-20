import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { DistributorComponent } from './distributor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { StockComponent } from './stock/stock.component';
import { RaiseNewComponent } from './purchace-order/raise-new/raise-new.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisregisterComponent } from './disregister/disregister.component';
import { DetailsofitemComponent } from './detailsofitem/detailsofitem.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    DistributorComponent,
    MyProfileComponent,
    ProductsComponent,
    PurchaceOrderComponent,
    StockComponent,
    RaiseNewComponent,
    DisregisterComponent,
    DetailsofitemComponent
  ],
  imports: [
    CommonModule,MatMenuModule,MatToolbarModule,MatIconModule,MatInputModule,MatButtonModule,
    DistributorRoutingModule,FormsModule,ReactiveFormsModule,MatFormFieldModule,MatDatepickerModule,



    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class DistributorModule { }
