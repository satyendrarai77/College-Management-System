import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../common/courses';
 
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private baseURL = "http://localhost:9095/api/courses"
 
  constructor(private httpClient: HttpClient) { }

         
  
  
  getAllCourses(): Observable<Courses[]>{
    return this.httpClient.get<Courses[]>(`${this.baseURL}`);
  }
  
  
  getCoursesById(id: number): Observable<Courses>{
  return this.httpClient.get<Courses>(`${this.baseURL}/${id}`);
  }
}