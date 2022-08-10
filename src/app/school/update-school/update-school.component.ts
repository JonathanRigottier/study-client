import { Component, OnInit } from '@angular/core';
import {SchoolService} from "../../shared/service/school.service";
import {School} from "../../shared/model/school";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-update-school',
  templateUrl: './update-school.component.html',
  styleUrls: ['./update-school.component.css']
})
export class UpdateSchoolComponent implements OnInit {

  id: any;

  form: FormGroup = this.fb.group({
    name: [null],
    city: [null],
    phone: [null]
  });

  constructor(private fb: FormBuilder, private schoolService: SchoolService, private router: Router,
              private route: ActivatedRoute, private school: School) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.schoolService.getSchoolById(this.id).subscribe(data => {
      this.school = data;
    });

  }

  saveDetails(form: any) {
    this.router.navigate(['/school']);
    return this.schoolService.updateSchool(this.form.getRawValue(),this.id).subscribe(()=>{});

  }

}
