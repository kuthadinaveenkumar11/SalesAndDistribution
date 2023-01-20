import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerComponent } from './authorizer.component';
import { RequestComponent } from './request/request.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AuthorizerComponent,
    RequestComponent,
    OrderTrackingComponent
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule,MatToolbarModule,MatIconModule,MatInputModule
  ]
})
export class AuthorizerModule { }
