import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/api-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-purchace-order',
  templateUrl: './purchace-order.component.html',
  styleUrls: ['./purchace-order.component.css']
})
export class PurchaceOrderComponent implements OnInit{
  displayedColumns : string[] = ['OrderPlacedDate', 'OrderID', 'ProductID','ProductName','Quantity','TotalCost','OrderStatus']
  matOrders = new MatTableDataSource();
  
  constructor(
    private apiService : ApiServiceService,
    private dialog : MatDialog
    ) { }
  ngOnInit(): void {
    this.apiService.GetofDisProduct().subscribe((orders : any) => {
      this.matOrders = new MatTableDataSource(orders);
      this.matOrders.paginator = this.paginator;
      this.matOrders.sort = this.matSort;
    })

  }

    @ViewChild(MatPaginator) paginator !: MatPaginator;
    @ViewChild(MatSort) matSort !: MatSort;
}
