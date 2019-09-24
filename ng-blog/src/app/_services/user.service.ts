import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>('/api/users');
    // }

    // getById(id: number) {
    //     return this.http.get(`/api/users/${id}`);
    // }

    register(user: User) {
				console.log(user);
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>('/api/register', user, options);
    }

    // update(user: User) {
    //     return this.http.put(`api/users/${user.id}`, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`api/users/${id}`);
    // }
}
