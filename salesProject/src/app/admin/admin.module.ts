import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ListDistributorsComponent } from './list-distributors/list-distributors.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { StockInWareHouseComponent } from './stock-in-ware-house/stock-in-ware-house.component';
import { StatusComponent } from './status/status.component';
import { ProcessedPurchaseorderFromWarehouseComponent } from './processed-purchaseorder-from-warehouse/processed-purchaseorder-from-warehouse.component';
import { TotalSalesEodComponent } from './total-sales-eod/total-sales-eod.component';
import { ViewAndEditProductCatalogAndPriceComponent } from './view-and-edit-product-catalog-and-price/view-and-edit-product-catalog-and-price.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AdminComponent,
    ListDistributorsComponent,
    ListEmployeeComponent,
    StockInWareHouseComponent,
    StatusComponent,
    ProcessedPurchaseorderFromWarehouseComponent,
    TotalSalesEodComponent,
    ViewAndEditProductCatalogAndPriceComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
