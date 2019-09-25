import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IEvent, ISession } from '../_models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}
   getPosts(): Observable<IEvent[]> {
     return this.http.get<IEvent[]>('/api/posts')
      .pipe(catchError(this.handleError<IEvent[]>('getPosts', [])));
   }

   getPost(id: number): Observable<IEvent> {
     return this.http.get<IEvent>(`/api/posts/${id}`)
      .pipe(catchError(this.handleError<IEvent>('getPost')));
   }

   savePost(post) {
     const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};

     return this.http.post<IEvent>('/api/posts', post, options)
      .pipe(catchError(this.handleError<IEvent>('savePost')));
   }
   searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>(`/api/sessions/search?search=${searchTerm}`)
     .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {
     console.error(error);
     return of(result as T);
   };
 }
}
