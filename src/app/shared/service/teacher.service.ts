import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {School} from "../model/school";
import {Teacher} from "../model/teacher";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private TEACHER_BASE_URL = 'teacher';
  private TEACHER_UPDATE_URL = 'teacher/update';
  private TEACHER_DELETE_URL = 'teacher/delete';
  private TEACHER_RESTORE_URL = 'teacher/restore';

  constructor(private httpClient: HttpClient) { }

  public getAllTeachers(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(this.TEACHER_BASE_URL);
  }

  public createTeacher(form: Teacher): Observable<any> {
    return this.httpClient.post(this.TEACHER_BASE_URL, form);
  }

  getTeacherById(id: string): Observable<Teacher>{
    return this.httpClient.get<Teacher>(`${this.TEACHER_BASE_URL}/${id}`);
  }

  public updateTeacher(form: Teacher): Observable<any> {
    return this.httpClient.post(this.TEACHER_UPDATE_URL, form);
  }

  public deleteTeacher(id: string): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.TEACHER_DELETE_URL}/${id}`)};

  public restoreTeacher(id: string): Observable<Teacher> {
    return this.httpClient.get<Teacher>(`${this.TEACHER_RESTORE_URL}/${id}`)};
}
