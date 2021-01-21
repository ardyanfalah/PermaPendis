import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import { Alert } from '../utilities/alert';
import { Router} from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service'
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    // private alert: Alert,
    private auth:AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    if (token !== null) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    const ignore = typeof request.body === 'undefined' || request.body === null || request.body.toString() === '[object FormData]';

    if (!ignore) {
      if (!request.headers.has('Content-Type') && request.url.indexOf('download') === -1) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
      }
    }

    if (request.url.endsWith('.xlsx')) {
      // tslint:disable-next-line:max-line-length
      request = request.clone({ headers: request.headers.set('Accept', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') });
    } else if (request.url.indexOf('download') !== -1 || request.url.indexOf('/file') !== -1) {
      request = request.clone({ headers: request.headers.set('Accept', '*/*') });
    } else {
      request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log('event--->>>', event);
        }
        return event;
      }),
      catchError(error => {
        console.log("interceptor=>")
        console.log(error)
        const data = {
          reason: error.error ? error.error : '',
          status: error.status
        };
        if (data.status === 401) {
          if (!error.url.endsWith('401')) {
            this.auth.eraseSessionData()
          }
          // activate afte login work
          this.router.navigateByUrl('/login');
        } else if(data.status === 404) {
          this.router.navigateByUrl('/404');
        } else if(data.status === 500) {
          this.router.navigateByUrl('/500');
        }
        return throwError(error);
      }));
  }

}
