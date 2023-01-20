import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaceOrderComponent } from '../distributor/purchace-order/purchace-order.component';
import { NewStockEntryComponent } from './new-stock-entry/new-stock-entry.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { ServiceAndDispatchComponent } from './service-and-dispatch/service-and-dispatch.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { TrackComponent } from './track/track.component';
import { WarehousesComponent } from './warehouses.component';

const routes: Routes = [{ path: '', component: WarehousesComponent },
{path:'new-stock-entry',component:NewStockEntryComponent},
{path:'track',component:TrackComponent},
{
  path:'stock-list',component:StockListComponent
},
{
  path:'service-and-dispatch',component:ServiceAndDispatchComponent
},
{
  path:'purchase-orders',component:PurchaseOrdersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehousesRoutingModule { }
