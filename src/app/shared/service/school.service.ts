import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../model/school";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private SCHOOL_BASE_URL = 'school';
  private SCHOOL_UPDATE_URL = 'school/update';
  private SCHOOL_DELETE_URL = 'school/delete';
  private SCHOOL_RESTORE_URL = 'school/restore';

  constructor(private httpClient: HttpClient) { }

  public getAllSchools(): Observable<School[]> {
    return this.httpClient.get<School[]>(this.SCHOOL_BASE_URL);
  }

  public createSchool(form: School): Observable<any> {
    return this.httpClient.post(this.SCHOOL_BASE_URL, form);
  }

  getSchoolById(id: string): Observable<School>{
    return this.httpClient.get<School>(`${this.SCHOOL_BASE_URL}/${id}`);
  }

  public updateSchool(form: School): Observable<any> {
    return this.httpClient.post(this.SCHOOL_UPDATE_URL, form);
  }

  public deleteSchool(id: string): Observable<School> {
    return this.httpClient.get<School>(`${this.SCHOOL_DELETE_URL}/${id}`)};

  public restoreSchool(id: string): Observable<School> {
    return this.httpClient.get<School>(`${this.SCHOOL_RESTORE_URL}/${id}`)};

}


