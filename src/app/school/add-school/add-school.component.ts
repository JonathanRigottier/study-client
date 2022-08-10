import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SchoolService} from "../../shared/service/school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {School} from "../../shared/model/school";


@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {




  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit(): void {


  }

  onSubmit(form: any) {
    this.router.navigate(['/school']);
    //return this.schoolService.createSchool(this.form.getRawValue()).subscribe(()=>{});

  }
}
