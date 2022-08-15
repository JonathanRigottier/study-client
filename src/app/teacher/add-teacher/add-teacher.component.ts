import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TeacherService} from "../../shared/service/teacher.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  form: FormGroup = this.fb.group({
    firstName: [null],
    lastName: [null],
    address: [null],
    email: [null],
    phone: [null]
  });

  constructor(private fb: FormBuilder, private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any) {
    return this.teacherService.createTeacher(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/teacher'])
      .then(() => {
        window.location.reload();
      });
  }
}
