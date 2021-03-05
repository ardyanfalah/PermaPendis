import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HandleError, HttpErrorHandlerService } from '../handler/http-error-handler.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { DataResponse,GeneralResponse } from '../models/Response/DataResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url = environment.server;
  private handleError: HandleError;

   constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    // public jwtHelper: JwtHelperService
  ) {
    this.handleError = httpErrorHandler.createHandleError('AccountService');
  }

  getAdminAll(): Observable<GeneralResponse> {
    return this.http.get<GeneralResponse>(this.url + '/admins', httpOptions);
  }

  postAdmin(param): Observable<GeneralResponse>{
    return this.http.post<GeneralResponse>(this.url + '/admins',param, httpOptions);
  }

  updateAdmin(id,param): Observable<GeneralResponse>{
    return this.http.put<GeneralResponse>(this.url + '/admins/'+id,param, httpOptions);
  }

  deleteAdmin(id): Observable<GeneralResponse>{
    return this.http.delete<GeneralResponse>(this.url + '/admins/'+id, httpOptions);
  }

}
