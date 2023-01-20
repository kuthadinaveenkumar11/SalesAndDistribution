import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detailsofitem',
  templateUrl: './detailsofitem.component.html',
  styleUrls: ['./detailsofitem.component.css']
})
export class DetailsofitemComponent {
  productlist:any;
  constructor(private http:HttpClient){
    this.http.get("https://localhost:44367/api/Scorpio/GetProduct").subscribe(e=>{this.productlist=e;});
}
}
