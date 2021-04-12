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
export class MasterdataService {

  private url = environment.server;
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandlerService,
    // public jwtHelper: JwtHelperService
  ) {
    this.handleError = httpErrorHandler.createHandleError('MasterdataService');
  }


  getImageUrl(){
    return this.url+"/download/";
  }

  getPenyelenggaraAll(){
    return this.http.get<GeneralResponse>(this.url + '/penyelenggara', httpOptions);
  }

  createPenyelenggara(param): Observable<GeneralResponse>{
    return this.http.post<GeneralResponse>(this.url + '/penyelenggara',param);
  }

  updatePenyelenggara(param): Observable<GeneralResponse>{
    return this.http.post<GeneralResponse>(this.url + '/penyelenggara/update',param);
  }

  deletePenyelenggara(id): Observable<GeneralResponse>{
    return this.http.delete<GeneralResponse>(this.url + '/penyelenggara/'+id, httpOptions);
  }
  

}
