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

    deletePost(post) {
      console.log(post);
      return this.http.delete<any>(`/api/posts/${post}`)
        .pipe(catchError(this.handleError<any>('deletePost')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
}
