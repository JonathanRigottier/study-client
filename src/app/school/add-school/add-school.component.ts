import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SchoolService} from "../../shared/service/school.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [null],
    city: [null],
    phone: [null]
  });

  constructor(private fb: FormBuilder, private schoolService: SchoolService, private router: Router) { }

  ngOnInit(): void {


  }

  saveDetails(form: any) {
    this.router.navigate(['/school']);
    return this.schoolService.createSchool(this.form.getRawValue()).subscribe(()=>{});

  }
}
