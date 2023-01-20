import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { DetailsofitemComponent } from '../detailsofitem/detailsofitem.component';
import { RaiseNewComponent } from '../purchace-order/raise-new/raise-new.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productlist:any;
  constructor(private ds:ApiServiceService,private http:HttpClient,private route:Router,private dialog:MatDialog){
    this.http.get("https://localhost:44367/api/Scorpio/GetProduct").subscribe(e=>{this.productlist=e;});

  }
  DetailsofItem(item:any){
    this.dialog.open(DetailsofitemComponent ,{
      height : '98%',
      width : '48%',
      data : item,
      
    });
  }
  onclickRaiseOrder(item:any){
    this.dialog.open(RaiseNewComponent, {
      height : '98%',
      width : '48%',
      data :  item
    });
  }
    // this.route.navigate(['/Distributor/detailsofitem']);
  
}
