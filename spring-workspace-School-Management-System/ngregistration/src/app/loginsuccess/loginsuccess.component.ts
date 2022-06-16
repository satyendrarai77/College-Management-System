import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';


@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor(private router : Router, private service:StudentService,private service1:CoursesService, private service2:TeacherService ) { }

  ngOnInit(): void {
    if (!this.service.session) {
      this.router.navigate(['/login'])

      
    }
   
    

    
  }
  imgUrl="assets/img1.jpg";
  registerUser()
  {
    console.log()
    this.router.navigate(['/login'])
  }

  
  logout( ){
    this.service.session=false;

  }
  
  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teacher'])
  }
  getAllCourses()
  {
    console.log()
    this.router.navigate(['/courses'])
  }

}
