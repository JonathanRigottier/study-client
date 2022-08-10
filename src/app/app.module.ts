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
import { AddSchoolComponent } from './school/add-school/add-school.component';
import { CourseComponent } from './course/course.component';
import { TeacherComponent } from './teacher/teacher.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import { YesNoPipePipe } from './yes-no-pipe.pipe';
import { UpdateSchoolComponent } from './school/update-school/update-school.component';
import { EditSchoolComponent } from './school/edit-school/edit-school.component';
import { FormsModule } from "@angular/forms";


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
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'school/create',
    component: AddSchoolComponent
  },
  {
    path: 'school/update/:id',
    component: EditSchoolComponent
  }

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
    EditSchoolComponent,

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
