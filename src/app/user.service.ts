import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface User{
  email:String;
  password:String;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  Signup(user:User){
 this.http.post("http://localhost:8880/api/signup",user).subscribe((message)=>{
  console.log(message)
});
}
 Login (user:User){
  this.http.post("http://localhost:8880/api/login",user).subscribe((message)=>{
   console.log(message)
 });
   }


}
