import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductType } from './models/productType';

@Injectable({
  providedIn: 'root',
})
export class DashboardApiClient {
  private readonly baseUrl: string = '/api';
  private readonly apiVersion: string = '/v1';

  private readonly defaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) {}

  searchMixedProducts(type: ProductType, query: string, page: number = 1): Observable<any> {
    if (!type || !query) {
      console.error('Both type and query are required parameters');
      return throwError(() => new Error('Invalid parameters: type and query are required.'));
    }

    const params = new HttpParams()
      .set('type', type)
      .set('q', query)
      .set('page', page);

    return this.http
      .get(`${this.baseUrl}${this.apiVersion}/search/mixed`, {
        params,
        headers: this.defaultHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      console.error('An error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
