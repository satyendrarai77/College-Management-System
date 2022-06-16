import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService, 
    private router: Router,
    private service:StudentService) { }

  ngOnInit(): void {

    if (!this.service.session) {
      this.router.navigate(['/login'])
      
    }
  }

  createStudent(){
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.listStudents();
    }, 
    error => console.log(error));
  }

  listStudents(){
    this.router.navigate(['/students']);
  }

  onSubmit(){
    this.createStudent();
  }

  getAllStudents()
  {
    console.log()
    this.router.navigate(['/students'])
  }
}