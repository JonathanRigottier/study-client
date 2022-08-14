import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Course} from "../../shared/model/course";
import {ActivatedRoute, Router} from "@angular/router";
import {CourseService} from "../../shared/service/course.service";

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  form: FormGroup;

  course: Course;
  id: string;
  constructor(private fb: FormBuilder, private courseService: CourseService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.courseService.getCourseById(this.id).subscribe(data => {
      this.course = data;

      this.form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        durationHours: new FormControl(null),
        isActive: new FormControl(null),

      });
      this.form.setValue({
        id: this.course.id,
        name: this.course.name,
        durationHours: this.course.durationHours,
        isActive: this.course.isActive,
      });
    });
  }

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any) {
    return this.courseService.updateCourse(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/course'])
      .then(() => {
        window.location.reload();
      });
  }
}
