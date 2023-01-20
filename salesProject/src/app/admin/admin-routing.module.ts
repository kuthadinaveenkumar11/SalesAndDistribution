import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ListDistributorsComponent } from './list-distributors/list-distributors.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { StatusComponent } from './status/status.component';
import { StockInWareHouseComponent } from './stock-in-ware-house/stock-in-ware-house.component';
import { TotalSalesEodComponent } from './total-sales-eod/total-sales-eod.component';
import { ViewAndEditProductCatalogAndPriceComponent } from './view-and-edit-product-catalog-and-price/view-and-edit-product-catalog-and-price.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{ path:'list-distributors', component: ListDistributorsComponent},
{ path:'list-employee',component: ListEmployeeComponent},
{ path: 'status',component:StatusComponent},
{ path: 'stock-in-ware-house',component:StockInWareHouseComponent},
{ path:'total-sales-eod',component:TotalSalesEodComponent},
{ path: 'view-and-edit-product-catalog-and-price',component:ViewAndEditProductCatalogAndPriceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
