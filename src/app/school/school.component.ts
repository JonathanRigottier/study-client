import {Component, OnInit} from '@angular/core';
import {School} from "../shared/model/school";
import {SchoolService} from "../shared/service/school.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'phone', 'createdDate', 'isActive' , 'actions'];
  schools: School[] = [];

  constructor(private schoolService: SchoolService) { };

  ngOnInit(): void {
    this.getSchools();
  }

  private getSchools() {
    this.schoolService.getAllSchools().subscribe(data => {
      this.schools = data;
    });
  }

}
