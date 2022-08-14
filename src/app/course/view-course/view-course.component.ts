import { Component, OnInit } from '@angular/core';
import {Course} from "../../shared/model/course";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../shared/service/course.service";

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  course: Course;
  id: string;
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.courseService.getCourseById(this.id).subscribe(data =>{
      this.course = data;
    });
  }
}
