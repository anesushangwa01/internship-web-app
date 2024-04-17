import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class JobappService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobslist`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getJobById(jobId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/jobslist/${jobId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
