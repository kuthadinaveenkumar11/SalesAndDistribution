import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsofitemComponent } from './detailsofitem/detailsofitem.component';
import { DistributorComponent } from './distributor.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaceOrderComponent } from './purchace-order/purchace-order.component';
import { RaiseNewComponent } from './purchace-order/raise-new/raise-new.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [{path:'',component:ProductsComponent},
{path:'stock',component:StockComponent},
{path:'products',component:ProductsComponent},
{path:'my-profile',component:MyProfileComponent},
{path:'purchase-order',component:PurchaceOrderComponent},
{path:'purchase-order/raise',component:RaiseNewComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistributorRoutingModule { }
