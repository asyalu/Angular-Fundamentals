import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendUrl = 'http://localhost:4000/user';
  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get(`${this.backendUrl}/me`);
  }
}