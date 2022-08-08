import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SchoolService} from "../../shared/service/school.service";
import {School} from "../../shared/model/school";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [null],
      city: [null],
      phone: [null]
    });
  }

  saveDetails(form: any) {
    alert(JSON.stringify(form.value, null, 4));
    return this.schoolService.createSchool(this.form.getRawValue()).subscribe(()=>{})
  }
}
