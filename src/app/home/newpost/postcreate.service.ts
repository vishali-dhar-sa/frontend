import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  CreatePost(post: Post) {
    console.log(post);
    this.http.post("http://localhost:8880/api/upload", post)
      .subscribe(
        res => {
          console.log(res)
        }, err => {
          console.log(err)
        }
      )}
}
