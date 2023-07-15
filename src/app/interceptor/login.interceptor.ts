import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogRegService } from '../services/logReg/log-reg.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private logRegService: LogRegService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.addToken(request));
  }

  addToken = (request: HttpRequest<any>) => {
    const loggedUser = this.logRegService.getLoggedUser()

    if (loggedUser) {
      return request.clone({
        setHeaders: {
          "Authorization": "Bearer " + loggedUser.accessToken
        }
      })
    }
    return request
  }
}