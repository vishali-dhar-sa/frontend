import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  AuthService,
  GoogleLoginProvider,
  FacebookLoginProvider
}
  from 'angularx-social-login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup


  constructor(private userservice: UserService,
              private authservice: AuthService,
              private router:Router
  ) { }

  private loggedIn: boolean;

  ngOnInit() {
    this.authservice.authState.subscribe((user) => {
      this.loggedIn = (user != null);
    });

    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.email, Validators.required]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;

    } else {

      const email = this.loginForm.value['email']
      const password = this.loginForm.value['password']
      this.userservice.Login({ email, password })
        .subscribe(
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



  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.authservice.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform + " sign in data : ", userData);

      }
    );
  }

  logout(){
    console.log("logging out of facebook");
       this.authservice.signOut();
       this.router.navigate(["/api/login"]);



  }

}


