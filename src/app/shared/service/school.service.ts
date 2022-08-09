import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../model/school";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private SCHOOL_BASE_URL = 'school';
  private baseUrl = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) { }

  public getAllSchools(): Observable<School[]> {
    return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL);
  }

  public createSchool(form: School): Observable<any> {
    return this.httpClient.post(this.SCHOOL_BASE_URL, form);
  }

  getSchoolById(id: any): Observable<School>{
    return this.httpClient.get<School>(`${this.baseUrl}/school/${id}`)
  }

  public updateSchool(form: School, id: any): Observable<any> {
    return this.httpClient.patch(`${this.baseUrl}/update/${id}`, form)
  }

}
