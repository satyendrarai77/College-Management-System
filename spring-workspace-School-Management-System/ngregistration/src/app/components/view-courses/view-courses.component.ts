import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/common/courses';
import { CoursesService } from 'src/app/services/courses.service';
 
@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {
 
  id!: number;
  courses!: Courses;
 
  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.courses = new Courses();
    this.coursesService.getCoursesById(this.id).subscribe(data =>{
      this.courses = data;
    },error => console.log(error));
  }
  getAllCourses()
  {
    console.log()
    this.router.navigate(['/courses'])
  }
}