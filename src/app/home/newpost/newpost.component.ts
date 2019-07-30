import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { PostcreateService } from './postcreate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  selectedFile:File
  addPost:FormGroup
  constructor(private postCreateService:PostcreateService,private router:Router) { }

  ngOnInit() {
     this.addPost=new FormGroup({
      'title':new FormControl('',Validators.required),
      'description':new FormControl('',Validators.required),
      'file':new FormControl('',Validators.required)
     
    })

    
  }

  onFetch(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("title", this.addPost.value.title);
    formData.append("description", this.addPost.value.description);
    formData.append("file", this.selectedFile);
   

    this.postCreateService.CreatePost(formData).subscribe(res => {
      console.log(res);
      
    });
  }
}



