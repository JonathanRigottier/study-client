import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../model/course";
import {School} from "../model/school";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private COURSE_BASE_URL = 'course';
  private COURSE_UPDATE_URL = 'course/update';
  private COURSE_DELETE_URL = 'course/delete';
  private COURSE_RESTORE_URL = 'course/restore';

  constructor(private httpClient: HttpClient) { }

  public getAllCourse(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.COURSE_BASE_URL);
  }

  public deleteCourse(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.COURSE_DELETE_URL}/${id}`)};

  public restoreCourse(id: string): Observable<Course> {
    return this.httpClient.get<Course>(`${this.COURSE_RESTORE_URL}/${id}`)};
}
