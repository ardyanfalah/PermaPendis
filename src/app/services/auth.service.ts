import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { GeneralResponse } from '../models/Response/DataResponse';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HandleError, HttpErrorHandlerService } from '../handler/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private prefixUrl = environment.server;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
  ) {
    this.handleError = httpErrorHandler.createHandleError('AuthService');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // const token = this.oauthService.getAccessToken();

    // debugger
    if (!token) {
      return false;
    }

    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  public isAuthenticatedVerifikator(): boolean {
    const token = localStorage.getItem('token-verifikator');
    // const token = this.oauthService.getAccessToken();

    // debugger
    if (!token) {
      return false;
    }

    // Check whether the token is expired and return
    // true or false
    // return !this.jwtHelper.isTokenExpired(token);
    return true;
  }

  login(dataRequest: LoginModel): Observable<GeneralResponse> {
    const observable = new Observable<GeneralResponse>(observer => {
      this.http
        .post<GeneralResponse>(
          this.prefixUrl + '/auth/login',
          dataRequest,
          httpOptions
        )
        .subscribe(
          resp => {
            // debugger
            if (resp.success) {
              localStorage.removeItem('token-verifikator');
              localStorage.removeItem('profile-verifikator');
              // localStorage.removeItem('applicationName');
              this.setSession(resp.data);
              observer.next(resp);
            } else {
              observer.next(resp);
            }
          },
          error => {
            // debugger
            /*const response: DataResponse = {
              success: false,
              message: error.error,
              data: error
            };*/
            observer.error(error);
          }
        );
    });
    return observable;
  }

  getCurrentUser(): Observable<GeneralResponse>{
    return this.http.get<GeneralResponse>(this.prefixUrl + '/auth/getcurrentuser',httpOptions);
  }

  getUserByNik(nik): Observable<GeneralResponse>{
    return this.http.get<GeneralResponse>(this.prefixUrl + '/kemendagri/getuserbynik?nik=' + nik,httpOptions);
  }

  private setSession(authResult) {
    // const expiresAt = moment().add(authResult.expired,'second');
    localStorage.setItem('profile', JSON.stringify(authResult.profile));
    localStorage.setItem('token', authResult.token);
    // localStorage.setItem("expires_at", authResult.exp);
  }

  eraseSessionData() {
    localStorage.removeItem('profile');
    localStorage.removeItem('token');
  }

  profileUser() {
    const profile = localStorage.getItem('profile')
    return JSON.parse(profile)
  }
}
