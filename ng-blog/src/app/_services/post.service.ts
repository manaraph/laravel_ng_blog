import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IEvent } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  constructor(private http: HttpClient) { }
    getPosts(): Observable<any> {
      return this.http.get<any>('/api/posts')
        .pipe(map(response => {
          return response;
        }));
    }

    getPost(id: number): Observable<any> {
      return this.http.get<any>(`/api/posts/${id}`)
        .pipe(map(response => {
          return response.data;
        }));
    }

    savePost(post) {
      console.log(post);
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

      return this.http.post<IEvent>('/api/posts', post, options)
        .pipe(catchError(this.handleError<IEvent>('savePost')));
    }
    /** DELETE: delete the post from the server */
    deletePost(id: number): Observable<{}> {
      console.log(id);
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

      const url = `/api/posts/${id}`;
      return this.http.delete(url, options)
        .pipe(
          catchError(this.handleError('deletePost'))
        );
    }
    

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }

    // private handleError(error: HttpErrorResponse) {
    //   if (error.error instanceof ErrorEvent) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', error.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.error(
    //       `Backend returned code ${error.status}, ` +
    //       `body was: ${error.error}`);
    //   }
    //   // return an observable with a user-facing error message
    //   return throwError(
    //     'Something bad happened; please try again later.');
    // };
}
