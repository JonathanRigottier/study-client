import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {School} from "../../shared/model/school";
import {SchoolService} from "../../shared/service/school.service";

@Component({
  selector: 'app-view-school',
  templateUrl: './view-school.component.html',
  styleUrls: ['./view-school.component.css']
})
export class ViewSchoolComponent implements OnInit {

  school: School;
  id: string;
  constructor(private route: ActivatedRoute, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.schoolService.getSchoolById(this.id).subscribe(data => {
      this.school = data;
    });
  }
}
