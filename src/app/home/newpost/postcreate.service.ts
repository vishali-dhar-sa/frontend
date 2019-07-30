import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostDetails} from '../post.model'

interface Post {
  title: String;
  description: String;
  file: String

}

@Injectable({
  providedIn: 'root'
})
export class PostcreateService {

  constructor(private http: HttpClient) { }

  CreatePost(post: FormData) {
    console.log(post);
   return this.http.post("http://localhost:8880/api/upload", post)
      
}

    getPosts(){
      return this.http.get<any>("http://localhost:8880/home");
      
    }
    
    getPost(id){
      return this.http.get<PostDetails[]>("http://localhost:8880/home/:id" +id);
    }
}
