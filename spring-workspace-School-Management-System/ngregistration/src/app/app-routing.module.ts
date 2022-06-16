import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';
import { ListTeacherComponent } from './components/list-teacher/list-teacher.component';
import { CreateTeacherComponent } from './components/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './components/update-teacher/update-teacher.component';
import { ViewTeacherComponent } from './components/view-teacher/view-teacher.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';


 
const routes: Routes = [
{path:'',component:LoginComponent},
{path:'loginsuccess',component:LoginsuccessComponent},
{path:'registration',component:RegistrationComponent},
{path: 'login',component:LoginComponent},
{path: '', redirectTo: 'students', pathMatch: 'full' },
 
{path: 'students', component: ListStudentsComponent},
{path: 'create-student', component: CreateStudentComponent},
{path: '', redirectTo: 'students', pathMatch: 'full' },
{path: 'update-student/:id', component: UpdateStudentComponent},
{path: 'view-student/:id', component: ViewStudentComponent},
{path: '', redirectTo: 'teacher', pathMatch: 'full' },
 
{path: 'teacher', component: ListTeacherComponent},
{path: 'create-teacher', component: CreateTeacherComponent},
{path: '', redirectTo: 'teacher', pathMatch: 'full' },
{path: 'update-teacher/:id', component: UpdateTeacherComponent},
{path: 'view-teacher/:id', component: ViewTeacherComponent},
 
{path: 'courses', component: ListCoursesComponent},
{path: '', redirectTo: 'courses', pathMatch: 'full' },
{path: 'view-courses/:id', component: ViewCoursesComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }