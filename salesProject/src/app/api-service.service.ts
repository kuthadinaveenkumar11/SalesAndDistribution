import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  outputofDisdetails!:any;

  constructor(private http:HttpClient) { 
    
  }
  Login(username:string|any,password:string|any){
      this.http.get("https://localhost:44367/api/Scorpio/GetOfDisProfile/"+username+"/"+password).subscribe(e=>{
        this.outputofDisdetails=e;})}
        // setTimeout(() => {

  GetProduct(){
    this.http.get("https://localhost:44367/api/Scorpio/GetProduct").subscribe();
  }
  PostStatusofProduct(json:any){
   return this.http.post("https://localhost:44367/api/Scorpio/Productstatus",json);
  }

  GetofDisProduct(){
    return this.http.get("https://localhost:44367/api/Scorpio/DisGetOrderProduct");
  }
}
  
