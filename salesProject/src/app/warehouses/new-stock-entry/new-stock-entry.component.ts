import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-new-stock-entry',
  templateUrl: './new-stock-entry.component.html',
  styleUrls: ['./new-stock-entry.component.css']
})
export class NewStockEntryComponent {
  loginform=new FormGroup({
    prodname:new FormControl(''),
    quantity:new FormControl(''),
    price:new FormControl(''),
    producttype:new FormControl(''),
    productbrand:new FormControl(''),
    Description:new FormControl('')

  })
  constructor(private form:FormBuilder,private data:ApiServiceService) { }
  save(){
    let DataForm=JSON.stringify(this.loginform.value)
    console.log(DataForm);
    window.location.reload();
 
  }
 

}
