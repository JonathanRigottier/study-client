import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Teacher} from "../../shared/model/teacher";
import {TeacherService} from "../../shared/service/teacher.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {

  form: FormGroup;

  teacher: Teacher;
  id: string;
  constructor(private fb: FormBuilder, private teacherService: TeacherService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teacherService.getTeacherById(this.id).subscribe(data => {
      this.teacher = data;

      this.form = new FormGroup({
        id: new FormControl(null),
        firstName: new FormControl(null),
        lastName: new FormControl(null),
        address: new FormControl(null),
        email: new FormControl(null),
        phone: new FormControl(null),
        isActive: new FormControl(null),

      });
      this.form.setValue({
        id: this.teacher.id,
        firstName: this.teacher.firstName,
        lastName: this.teacher.lastName,
        address: this.teacher.address,
        email: this.teacher.email,
        phone: this.teacher.phone,
        isActive: this.teacher.isActive,
      });
    });
  }

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any) {
    return this.teacherService.updateTeacher(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/teacher'])
      .then(() => {
        window.location.reload();
      });
  }
}
