import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Company} from './company';
import {catchError} from 'rxjs/operators';
import {Employee} from '../employees/employee';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private httpClient: HttpClient) { }

  create(company): Observable<Company> {
    return this.httpClient.post<Company>(this.apiServer + '/companies/', JSON.stringify(company), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getById(id): Observable<Company> {
    return this.httpClient.get<Company>(this.apiServer + '/companies/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAll(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.apiServer + '/companies/')
      .pipe(
        catchError(this.errorHandler)
      );
  }
  update(id, company): Observable<Company> {
    return this.httpClient.put<Company>(this.apiServer + '/companies/' + id, JSON.stringify(company), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id): Observable<Company> {
    return this.httpClient.delete<Company>(this.apiServer + '/companies/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  errorHandler(error): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
