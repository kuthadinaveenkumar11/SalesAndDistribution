import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehousesRoutingModule } from './warehouses-routing.module';
import { WarehousesComponent } from './warehouses.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TrackComponent } from './track/track.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { ServiceAndDispatchComponent } from './service-and-dispatch/service-and-dispatch.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    WarehousesComponent,
    NewStockEntryComponent,
    TrackComponent,
    StockListComponent,
    ServiceAndDispatchComponent,
    PurchaseOrdersComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,
    WarehousesRoutingModule,
    ]
})
export class WarehousesModule { }
