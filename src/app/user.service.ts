import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

interface User{
  email:String;
  password:String;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,
              private router:Router) { }

Signup(user:User){
 return this.http.post<{token:string}>("http://localhost:8880/api/signup",user)
}
  
 Login (user:User){
  return this.http.post<{token:string}>("http://localhost:8880/api/login",user)
}

loggedIn(){
  return !!localStorage.getItem('token')
}

logoutUser(){
  localStorage.removeItem('token')
  this.router.navigate(['/api/login'])
}
getToken(){
  return localStorage.getItem('token')
}
} 