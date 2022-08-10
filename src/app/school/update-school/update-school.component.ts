import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SchoolService} from "../../shared/service/school.service";
import {ActivatedRoute, Router} from "@angular/router";
import {School} from "../../shared/model/school";

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  form: FormGroup = this.fb.group({
    name: [null],
    city: [null],
    phone: [null]
  });

  school: School;
  id: string;
  constructor(private fb: FormBuilder, private schoolService: SchoolService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.schoolService.getSchoolById(this.id).subscribe(data => {
      this.school = data;
      }
    )
  }

  onSubmit(form: any) {
    this.saveDetails(this.form);
    this.goBack();
  }
  saveDetails(form: any) {
    return this.schoolService.createSchool(this.form.getRawValue()).subscribe(()=>{});
  }

  goBack() {
    this.router.navigate(['/school']);
  }

}
