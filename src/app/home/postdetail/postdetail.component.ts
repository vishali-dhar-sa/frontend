import { Component, OnInit } from '@angular/core';
import { PostcreateService } from '../newpost/postcreate.service';
import {ActivatedRoute,ParamMap, Params,Router} from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  data;
  post:any;
  id:string;

  constructor(private postService:PostcreateService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.data = this.postService.getPost(
        params.id
      );
    });
    this.data.subscribe(data => {
      console.log(data);
    });
  }
  //   this.route.params.subscribe((params: Params) => {
  //     this.data = this.postService.getPost(params.id);
  //   }
  // }
}