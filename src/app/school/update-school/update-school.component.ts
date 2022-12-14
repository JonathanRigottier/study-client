import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SchoolService} from "../../shared/service/school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {School} from "../../shared/model/school";

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  form: FormGroup;

  school: School;
  id: string;
  constructor(private fb: FormBuilder, private schoolService: SchoolService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.schoolService.getSchoolById(this.id).subscribe(data => {
      this.school = data;

      this.form = new FormGroup({
        id: new FormControl(null),
        name: new FormControl(null),
        city: new FormControl(null),
        phone: new FormControl(null),
        isActive: new FormControl(null),

        });
      this.form.setValue({
        id: this.school.id,
        name: this.school.name,
        city: this.school.city,
        phone: this.school.phone,
        isActive: this.school.isActive,
      });
    });
  }

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any) {
    return this.schoolService.updateSchool(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/school'])
      .then(() => {
        window.location.reload();
      });
  }
}
