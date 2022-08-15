import { Component, OnInit } from '@angular/core';
import {TeacherService} from "../shared/service/teacher.service";
import {Teacher} from "../shared/model/teacher";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'actions'];
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService) { };

  ngOnInit(): void {
    this.getTeachers();
  }

  private getTeachers() {
    this.teacherService.getAllTeachers().subscribe(data => {
      this.teachers = data;
    });
  }

  onUpdateClicked(id: string) {
    let currentTeacher = this.teachers.find((teacher) => {return teacher.id === id});
  }

  setInactiveTeacherClicked(id: string) {
    let currentTeacher = this.teachers.find((teacher) => {return teacher.id === id});
    return this.teacherService.deleteTeacher(currentTeacher.id).subscribe(()=>{});
  }

  setRestoreTeacherClicked(id: string) {
    let currentTeacher = this.teachers.find((teacher) => {return teacher.id === id});
    return this.teacherService.restoreTeacher(currentTeacher.id).subscribe(()=>{});
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
