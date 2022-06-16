import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/common/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
 
@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {
 
  id!: number;
  teacher!: Teacher;
 
  constructor(private route: ActivatedRoute, private teacherService: TeacherService, private router: Router) { }
 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.teacher = new Teacher();
    this.teacherService.getTeacherById(this.id).subscribe(data =>{
      this.teacher = data;
    },error => console.log(error));
  }
  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teacher'])
  }
}
