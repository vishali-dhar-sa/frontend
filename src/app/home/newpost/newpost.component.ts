import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  addPost:FormGroup
  constructor() { }

  ngOnInit() {
     this.addPost=new FormGroup({
      'title':new FormControl(''),
      'description':new FormControl(''),
      'file':new FormControl('')
     
    })
  }
  
  onSubmit(){
    if(!this.addPost.valid){
      return ;

    }else{
      
       const title= this.addPost.value['title']
       const description= this.addPost.value['description']
       const file=this.addPost.value['file']
        console.log({title,description,file})

      }
      
    }

}
