import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../model/school";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private SCHOOL_BASE_URL = 'school';

  constructor(private httpClient: HttpClient) { }

  public getAllSchools(): Observable<School[]> {
    return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL);
  }

  public createSchool(form: School): Observable<any> {
    return this.httpClient.post(this.SCHOOL_BASE_URL, form);
  }

  getSchoolById(id: string): Observable<School>{
    return this.httpClient.get<School>(`${this.SCHOOL_BASE_URL}/${id}`)
  }

  public updateSchool(form: School, id: string): Observable<any> {
    return this.httpClient.patch(`${this.SCHOOL_BASE_URL}/update/${id}`, form)
  }

}
