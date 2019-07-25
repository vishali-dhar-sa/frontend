import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {SocialLoginModule,
        AuthServiceConfig, 
        GoogleLoginProvider,
        FacebookLoginProvider} 
        from 'angularx-social-login';
 
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewpostComponent } from './home/newpost/newpost.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("314590258543-6fscarfjhslgh1v319585rccs9q292vm.apps.googleusercontent.com")
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("434775350714836")
      },
     
    ]
  );
  return config;
}



const appRoutes:Routes=[
  {path:'api/signup', component:SignupComponent},
  {path:'api/login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'newpost',component:NewpostComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NewpostComponent,
   
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
               provide: AuthServiceConfig,
               useFactory: getAuthServiceConfigs
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
