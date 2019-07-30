import { Component, OnInit } from '@angular/core';
import { PostcreateService } from './newpost/postcreate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  complaintDetailsById;
allPosts:any;
  constructor(private postService:PostcreateService,private router:Router) { }

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
  getById(_id) {
    this.complaintDetailsById = this.postService.getPost(_id);
    this.router.navigate(["/postDetail/" + _id]);
  }

}
