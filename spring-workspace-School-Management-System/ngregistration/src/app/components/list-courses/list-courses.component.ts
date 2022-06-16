import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/common/courses';
import { CoursesService } from 'src/app/services/courses.service';
 
@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {
  
  constructor(private coursesService: CoursesService,private router: Router) { }
 
  courses!: Courses[];
  ngOnInit(): void { this.coursesService.getAllCourses().subscribe(data =>{
    this.courses=data;
  });
  }
  viewCourses(id:number){
    this.router.navigate(['view-courses',id]);
  }
 
  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
 
}
