import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SchoolComponent } from './school/school.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppInterceptor} from "./shared/interceptor/app.interceptor";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { YesNoPipePipe } from './yes-no-pipe.pipe';
import { FormsModule } from "@angular/forms";
import {AddSchoolComponent} from "./school/add-school/add-school.component";
import {UpdateSchoolComponent} from "./school/update-school/update-school.component";
import { ViewSchoolComponent } from './school/view-school/view-school.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { UpdateCourseComponent } from './course/update-course/update-course.component';
import { ViewCourseComponent } from './course/view-course/view-course.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'school',
    component: SchoolComponent
  },
  {
    path: 'school/create',
    component: AddSchoolComponent
  },
  {
    path: 'school/update/:id',
    component: UpdateSchoolComponent
  },
  {
    path: 'school/:id',
    component: ViewSchoolComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course/create',
    component: AddCourseComponent
  },
  {
    path: 'course/update/:id',
    component: UpdateCourseComponent
  },
  {
    path: 'course/:id',
    component: ViewCourseComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SchoolComponent,
    AddSchoolComponent,
    CourseComponent,
    TeacherComponent,
    YesNoPipePipe,
    UpdateSchoolComponent,
    ViewSchoolComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    ViewCourseComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forChild(appRoutes),
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
