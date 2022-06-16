import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { Teacher } from 'src/app/common/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
 

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
 
  teacher: Teacher = new Teacher();
 
  constructor(private teacherService: TeacherService, 
    private router: Router) { }
 
  ngOnInit(): void {
  }
  createTeacher(){
    this.teacherService.createTeacher(this.teacher).subscribe(data=>{
      console.log(data);
      this.listTeachers();
    }, 
      (    error: any) => console.log(error));
  }
 
  listTeachers(){
    this.router.navigate(['/teacher']);
  }
 
  onSubmit(){
    this.createTeacher();
  }
 
  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teacher'])
  }
}