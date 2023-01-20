import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizerComponent } from './authorizer.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {path:'',component:AuthorizerComponent},
  { path: 'order-tracking', component: OrderTrackingComponent },
  {path:'request',component:RequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizerRoutingModule { }
