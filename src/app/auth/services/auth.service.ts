import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap } from 'rxjs';

import { environments } from '../../../environments/environments';
import { User } from '../interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthServiceService {

  private baseUrl = environments.baseUrl;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser(): User | undefined {
    if (!this.user) {
      return undefined;
    }

    // Deep clone of the user.
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {

    return this.http.get<User>(`${this.baseUrl}/users/1`)
      .pipe(
        tap(user => this.user = user),
        tap(user => localStorage.setItem('token', 'Alkasjd.1823.aslkjAS')),
      );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }

}
