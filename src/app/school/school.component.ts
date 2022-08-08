import {Component, OnInit} from '@angular/core';
import {School} from "../shared/model/school";
import {SchoolService} from "../shared/service/school.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'phone', 'createdDate', 'isActive'];
  dataSource: School[] = [];

  constructor(private schoolService: SchoolService) { };

  ngOnInit(): void {
    this.schoolService.getAllSchools().subscribe(value => {
      this.dataSource = value
    });
  }

}
