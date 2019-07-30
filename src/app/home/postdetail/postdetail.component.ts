import { Component, OnInit } from '@angular/core';
import { PostcreateService } from '../newpost/postcreate.service';
import {ActivatedRoute,ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.css']
})
export class PostdetailComponent implements OnInit {
  post:any;
  id:string;

  constructor(private postService:PostcreateService,
              private route:ActivatedRoute) { }

  ngOnInit() {
  
}
}