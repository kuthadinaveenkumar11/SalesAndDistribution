import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {
  Disdetails:any
constructor(private http:HttpClient,private api:ApiServiceService){
  // this.http.get("https://localhost:44367/api/Scorpio/GetOfDisProfile/"+this.api.outputofDisdetails).subscribe(e=>{this.Disdetails=e,console.log(e)});
  this.Disdetails=this.api.outputofDisdetails;

}
}
