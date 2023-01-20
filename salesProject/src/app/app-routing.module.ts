import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisregisterComponent } from './distributor/disregister/disregister.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Distributor/disregis',component:DisregisterComponent},

  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'Authorizer', loadChildren: () => import('./authorizer/authorizer.module').then(m => m.AuthorizerModule) },
  { path: 'Distributor', loadChildren: () => import('./distributor/distributor.module').then(m => m.DistributorModule) },
  { path: 'Warehouses', loadChildren: () => import('./warehouses/warehouses.module').then(m => m.WarehousesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
