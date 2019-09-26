import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IEvent } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
    getPosts(): Observable<any> {
      return this.http.get<any>('/api/posts')
        .pipe(map(response => {
          return response;
        }));
    }

    getPost(id: number): Observable<IEvent> {
      return this.http.get<IEvent>(`/api/posts/${id}`)
        .pipe(catchError(this.handleError<IEvent>('getPost')));
    }

    savePost(post) {
      console.log(post);
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

      return this.http.post<IEvent>('/api/posts', post, options)
        .pipe(catchError(this.handleError<IEvent>('savePost')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
}
