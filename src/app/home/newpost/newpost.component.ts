import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { PostcreateService } from './postcreate.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  addPost:FormGroup
  url:[]
  constructor(private postCreateService:PostcreateService) { }

  ngOnInit() {
     this.addPost=new FormGroup({
      'title':new FormControl('',Validators.required),
      'description':new FormControl(''),
      'file':new FormControl('')
     
    })
  }

  
  
  onSubmit(){

    this.addPost.value.file = this.addPost.value.file.replace("C:\\fakepath\\", "");
    console.log(this.addPost.value.file);
        this.postCreateService.CreatePost(this.addPost.value);
      }

}
