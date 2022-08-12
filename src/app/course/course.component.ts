import { Component, OnInit } from '@angular/core';
import {Course} from "../shared/model/course";
import {CourseService} from "../shared/service/course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'durationHours', 'actions'];
  courses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses() {
    this.courseService.getAllCourse().subscribe(data => {
      this.courses = data;
    })
  }

  onUpdateClicked(id: string) {
    let currentCourse = this.courses.find((s) => {return s.id === id});
  }

  setInactiveCourseClicked(id: string) {
    let currentCourse = this.courses.find((school) => {return school.id === id});
    return this.courseService.deleteCourse(currentCourse.id).subscribe(()=>{});
  }

  setRestoreCourseClicked(id: string) {
    let currentSchool = this.courses.find((s) => {return s.id === id});
    return this.courseService.restoreCourse(currentSchool.id).subscribe(()=>{});
  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
