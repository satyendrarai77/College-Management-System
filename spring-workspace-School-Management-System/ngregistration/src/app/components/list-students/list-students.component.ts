import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/common/student';
import { RegistrationService } from 'src/app/registration.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService,private router: Router,
    private service:StudentService) { }

  students!: Student[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.studentService.getStudentList().subscribe(data =>{
      this.students=data;
    });

    if (!this.service.session) {
      this.router.navigate(['/login'])
      
    }
  }
  updateStudent(id: number){
    // event handler expects route and id
    this.router.navigate(['update-student',id]);
  }

  deleteStudent(id: number){
    // delete student
    this.studentService.deleteStudent(id).subscribe (data =>{
    // return to student list
    this.getStudentList();   
    });
  }
  viewStudent(id:number){
    this.router.navigate(['view-student',id]);
  }

  loginUser()
  {
    console.log()
    this.router.navigate(['/loginsuccess'])
  }
  createStudent()
  {
    console.log()
    this.router.navigate(['/create-student'])
  }
}