import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req,next){
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:'Bearer ${authService.getToken()}'
      }
    })
    return next.handle(tokenizedReq)
  }
}
