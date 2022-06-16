import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
 
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';
import { ListTeacherComponent } from './components/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { ViewTeacherComponent } from './components/view-teacher/view-teacher.component';

import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    CreateStudentComponent,
    ListStudentsComponent,
    UpdateStudentComponent,
    ViewStudentComponent,
    CreateTeacherComponent,
    ListTeacherComponent,
    UpdateTeacherComponent,
    ViewTeacherComponent,
    ListCoursesComponent,
    ViewCoursesComponent,
    ListCoursesComponent,
    ViewCoursesComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
