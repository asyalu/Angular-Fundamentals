import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:4000/authors/all');
  }

  addAuthor(name: string): Observable<any> {
    return this.http.post('http://localhost:4000/authors/add', { name: name });
  }

  getAuthor(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/authors/${id}`);
  }
}
