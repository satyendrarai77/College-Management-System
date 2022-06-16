import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/common/teacher';
import { TeacherService } from 'src/app/services/teacher.service';
 
@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit {
 
  teacher: Teacher = new Teacher();
  id!: number;
 
  constructor(private teacherService: TeacherService, 
    private router: Router,
    private route: ActivatedRoute) { }
 
  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];
 
    this.teacherService.getTeacherById(this.id)
    .subscribe(data =>{
      this.teacher = data;
    },error => console.log(error));
  }
 
  onSubmit(){
    this.teacherService.updateTeacher(this.id, this.teacher)
    .subscribe(data =>{
      this.listTeachers();
    },error => console.log(error));
  }
 
  listTeachers(){
    this.router.navigate(['/teacher']);
  }
  getAllTeachers()
  {
    console.log()
    this.router.navigate(['/teacher'])
  }
}
