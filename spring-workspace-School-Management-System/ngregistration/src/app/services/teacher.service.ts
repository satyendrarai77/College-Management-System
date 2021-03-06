import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Teacher } from '../common/teacher';
 
@Injectable({
  providedIn: 'root'
})
export class TeacherService { 
  private baseURL = "http://localhost:9095/api/teacher"
 
constructor(private httpClient: HttpClient) { }

      

 
getAllTeachers(): Observable<Teacher[]>{
  return this.httpClient.get<Teacher[]>(`${this.baseURL}`);
}
 
createTeacher(teacher: Teacher): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, teacher);
}
getTeacherById(id: number): Observable<Teacher>{
return this.httpClient.get<Teacher>(`${this.baseURL}/${id}`);
}
 
updateTeacher(id: number, teacher: Teacher): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, teacher);
}
deleteTeacher(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}
}
