import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post{
  title:String;
  description:String;

}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  PostCreate(post:Post){
    this.http.post("http://localhost:8880/api/postcreate",post).subscribe((message)=>{
     console.log(message)
   });
}

}
