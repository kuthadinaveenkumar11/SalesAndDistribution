import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  productlist:any;
  constructor(private http:HttpClient){
    this.http.get("https://localhost:44367/api/Scorpio/DisGetProduct").subscribe(e=>{this.productlist=e;});
}
}
