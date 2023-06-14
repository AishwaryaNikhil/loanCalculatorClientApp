
import {throwError as observableThrowError,  Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_URI } from "../../commonsettings/sharedsettings";

@Injectable()
export class BaseService {
  protected baseUrl: string;

  constructor(protected http: HttpClient) {
    this.baseUrl = API_URI.loanApi;   
  }

  protected get<Type>(url: string, options?: any): Observable<any> {
    return this.http.get(this.baseUrl + url, options).pipe(
      catchError(this.handleError));
  }

  protected post<Type>(url: string, data: Type, options?: any) : Observable<any> {
    return this.http.post(this.baseUrl + url, data, options).pipe(
      catchError(this.handleError));
  }

  protected put<Type>(url: string, data: Type, options?: any) : Observable<any> {
    return this.http.put(this.baseUrl + url, data, options).pipe(
      catchError(this.handleError));
  }
  protected delete<Type>(url: string, data: any) : Observable<any>{
    return this.http.delete(this.baseUrl + url, data).pipe(
      catchError(this.handleError));
  }

  protected handleError(error: HttpErrorResponse) {
    // if (error.status === 400)
    //     return Observable.throw(error.error.details);
    // else
    return observableThrowError(error);
  }
}
