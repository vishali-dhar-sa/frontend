import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
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
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service';
import { PostdetailComponent } from './home/postdetail/postdetail.component'

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
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'api/signup', component:SignupComponent},
  {path:'api/login',component:LoginComponent},
  {path:'newpost',component:NewpostComponent},
  {path:'postDetail/:id',component:PostdetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NewpostComponent,
    PostdetailComponent,
    
   
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,
             {
              provide: AuthServiceConfig,                     
              useFactory: getAuthServiceConfigs,
             },
             {
               provide:HTTP_INTERCEPTORS,
               useClass:TokenInterceptorService,
               multi:true
             },
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
