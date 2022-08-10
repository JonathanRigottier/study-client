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

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any) {
    return this.schoolService.createSchool(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/school']);
  }
}
