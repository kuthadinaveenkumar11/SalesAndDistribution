import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentDate=new Date();
  changing:string="Select The User Type";
  passwordchanging:string="Select The User Type";
  disabled=true;
  selected:any;

  distrprof:any;
  
  
  loginform=new FormGroup({
    Uname:new FormControl(''),
    Pssword:new FormControl(''),
    dis:new FormControl('')


  })
  constructor(private routee:Router,private api:ApiServiceService,private http:HttpClient) { 

  }

  ngOnInit(): void {

  }
  onClick(){
    console.log(this.loginform.value);

    if(this.loginform.value.dis=="Distributor")
    {
      this.api.Login(this.loginform.value.Uname,this.loginform.value.Pssword);
      console.log(this.loginform.value.dis);
      console.log(this.api.outputofDisdetails);
      setTimeout(() => {
        if(this.api.outputofDisdetails!=null){
          this.routee.navigate(['Distributor']);
       }
      }, 1000);
     

      if(this.loginform.value.Uname=='Dis'&&this.loginform.value.Pssword=='12345')

   {
    //  this.routee.navigate(['Distributor']);

    }
    else{
    alert("enter crt");
    }
    }
    else if (this.loginform.value.dis=="Authorizer"){
      if(this.loginform.value.Uname=='auth'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['Authorizer']);
    }
    else{
    alert("enter crt");
    }
    }
    else if (this.loginform.value.dis=="Warehouse"){
      if(this.loginform.value.Uname=='ware'&&this.loginform.value.Pssword=='12345')
      {
        // this.routee.navigate(['Warehouse']);
        this.routee.navigate(['Warehouses']);

      }
      else{
        alert("enter crt");
      }
    }
    else if (this.loginform.value.dis=="Admin"){
      if(this.loginform.value.Uname=='admin'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['Admin']);
    }
    else{
    alert("enter crt");
    }
    }
    
    else{
    alert("Select the user ")
    }




  }
  Distributor(){
      this.changing="Enter the Distributor Mail";
      this.passwordchanging="Enter the Distributor Password";
      this.disabled=false;
      console.log(this.loginform.value);



  }
  Authorizer(){
    this.changing="Enter the Authorizer Mail";
    this.passwordchanging="Enter the Authorizer Password";
    this.disabled=true;


  }
  Warehouse(){
    this.changing="Enter the Warehouse Mail";
    this.passwordchanging="Enter the Warehouse Password";
    this.disabled=false;


  }
  Admin(){
    this.changing="Enter the Admin Mail";
    this.passwordchanging="Enter the Admin Password";
    this.disabled=true;
  }
  register(){
    if(this.loginform.value.dis=="Distributor"){
      this.routee.navigate(['Distributor/disregis']);
    }
    else if(this.loginform.value.dis=="Warehouse"){
      this.routee.navigate(['Warehouse/wareregis']);
    }
  }
}
