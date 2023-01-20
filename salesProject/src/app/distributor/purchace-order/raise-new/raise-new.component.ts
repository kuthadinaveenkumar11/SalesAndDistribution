import { Component ,Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-raise-new',
  templateUrl: './raise-new.component.html',
  styleUrls: ['./raise-new.component.css']
})
export class RaiseNewComponent implements OnInit {

  raisePOForm !: FormGroup;
  orderDetails : any;
  baseUrlForOrder : string = 'https://localhost:44321/api/Distributer/Order'

  constructor(
    private dialogRef : MatDialogRef<RaiseNewComponent>,
    private fb : FormBuilder,
    private apiService : ApiServiceService,
    @Inject(MAT_DIALOG_DATA) private data : any
    ) { }

  ngOnInit(): void {
    this.raisePOForm = this.fb.group({
      OrderPlacedDate : [new Date],
      OrderID : [''],
      ProductID : [''],
      ProductName : [''],
      Quantity : [''],
      Type : [''],
      TotalCost : [''],
      Status:[''],

    })

    this.raisePOForm.patchValue({
      OrderPlacedDate : new Date,
      // OrderID :Math.floor(1000 * Math.random()),
       OrderID : Math.floor(1000 + Math.random() * 9000),
      ProductID : this.data.Product_id,
      Type:this.data.Type,
      ProductName : this.data.Name,
      Quantity : this.data.Quantity,
      TotalCost : this.data.Price,
      Status: 'pending',
      // ShippingCost : (Number(this.data.product.UnitPrice) * this.data.qty * 0.02).toFixed(2) ,
      // taxes : Number(this.data.product.UnitPrice) * this.data.qty * 0.07,
      // TotalCost : ((this.data.qty * this.data.product.UnitPrice) + (Number(this.data.product.UnitPrice) * this.data.qty * 0.02) + Number(this.data.product.UnitPrice) * this.data.qty * 0.07).toFixed(2),
    })
  }
  

  onClickConfirmOrder(){
      console.log(this.raisePOForm.value);

    // console.log(this.raisePOForm.value)
    this.apiService.PostStatusofProduct( this.raisePOForm.value).subscribe({ next : () => {
      this.dialogRef.close();
    }})
  }

  onClickClose(){
    this.dialogRef.close();
  }

}
