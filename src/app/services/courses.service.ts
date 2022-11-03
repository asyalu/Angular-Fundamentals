import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  backendUrl = 'http://localhost:4000/courses';
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.backendUrl}/all`);
  }

  createCourse(course: ICourse): Observable<any> {
    return this.http.post(`${this.backendUrl}/add`, course);
  }

  editCourse(course: ICourse): Observable<any> {
    return this.http.put(`${this.backendUrl}/${course.id}`, course);
  }

  filterCourses(search: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/filter${search}`);
  }

  getCourse(id: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/${id}`);
  }

  deleteCourse(id: string): Observable<any> {
    return this.http.delete(`${this.backendUrl}/${id}`);
  }
}
