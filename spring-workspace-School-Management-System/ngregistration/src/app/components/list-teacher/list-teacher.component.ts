import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/common/teacher';
import { RegistrationService } from 'src/app/registration.service';
 
import { TeacherService } from 'src/app/services/teacher.service';
@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
 
  constructor(private teacherService: TeacherService,private router: Router) { }
 
  teacher!: Teacher[];
 
  ngOnInit(): void {
  }
  private getTeacherList(){
    this.teacherService.getAllTeachers().subscribe(data =>{
      this.teacher=data;
    });
  }
  updateTeacher(id: number){
    // event handler expects route and id
    this.router.navigate(['update-teacher',id]);
  }
 
  deleteTeacher(id: number){
    // delete student
    this.teacherService.deleteTeacher(id).subscribe (data =>{
    // return to student list
    this.getTeacherList();   
    });
  }
  viewTeacher(id:number){
    this.router.navigate(['view-teacher',id]);
  }
 
  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createTeacher()
  {
    console.log()
    this.router.navigate(['/create-teacher'])
  }
}
