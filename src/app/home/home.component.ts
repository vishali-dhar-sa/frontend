import { Component, OnInit } from '@angular/core';
import { PostcreateService } from './newpost/postcreate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
allPosts:any;
  constructor(private postService:PostcreateService) { }

  ngOnInit() {
    
    this.postService.getPosts()
     .subscribe(
      res=>{
        console.log(res.allPosts)
       this.allPosts=res.allPosts
      },err=>{
        console.log(err)
      }
     )

  }

}
