import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { StudentService } from '../services/student.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg='';
  constructor(private _servic : RegistrationService, private _route : Router, private service:StudentService) { }

  ngOnInit(): void {
  }
loginUser(){
this._servic.loginUserFromRemote(this.user).subscribe(
  data =>{ 
    console.log("response recieved");
    this.service.session=true;


    this._route.navigate(['/loginsuccess'])
  },
  error => {console.log("exception occured");
  this.msg="Invalid credentials, please enter valid email Id and password";
}
)
}
gotoregistration(){
  this._route.navigate(['/registration'])
}
}
