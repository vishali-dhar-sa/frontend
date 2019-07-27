import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor(private userservice: UserService,
              private router:Router) { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;

    } else {

      const email = this.signupForm.value['email']
      const password = this.signupForm.value['password']
      this.userservice.Signup({ email, password }).subscribe(
        message => {
          console.log(message)
          localStorage.setItem('token', message.token)
          this.router.navigate(['/home'])
        },
        err => {
          console.log(err)
        }
      )
    };


  }

}





