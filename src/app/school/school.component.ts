import {Component, OnInit} from '@angular/core';
import {School} from "../shared/model/school";
import {SchoolService} from "../shared/service/school.service";

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'city', 'phone', 'actions'];
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

  onUpdateClicked(id: string) {
    let currentSchool = this.schools.find((school) => {return school.id === id});
  }

  setInactiveSchoolClicked(id: string) {
    let currentSchool = this.schools.find((school) => {return school.id === id});
    return this.schoolService.deleteSchool(currentSchool.id).subscribe(()=>{});
  }

  setRestoreSchoolClicked(id: string) {
    let currentSchool = this.schools.find((school) => {return school.id === id});
    return this.schoolService.restoreSchool(currentSchool.id).subscribe(()=>{});
  }

  reloadCurrentPage() {
    window.location.reload();
  }
}
