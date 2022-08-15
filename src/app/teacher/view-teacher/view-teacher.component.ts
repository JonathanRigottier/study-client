import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../shared/model/teacher";
import {ActivatedRoute} from "@angular/router";
import {TeacherService} from "../../shared/service/teacher.service";

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {

  teacher: Teacher;
  id: string;
  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;
    });
  }
}
