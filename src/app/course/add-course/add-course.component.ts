import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CourseService} from "../../shared/service/course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [null],
    durationHours : [null],
  });

  constructor(private fb: FormBuilder, private courseService: CourseService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any){
    return this.courseService.createCourse(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/course'])
      .then(() => {
        window.location.reload();
      });
  }

}
