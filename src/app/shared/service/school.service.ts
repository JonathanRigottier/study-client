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
}
