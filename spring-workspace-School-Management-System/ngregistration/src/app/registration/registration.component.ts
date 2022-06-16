import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',            
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  imgUrl="assets/img1.jpg"; 

  

  

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(){
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{ 
        console.log("response recieved")
        this._router.navigate(['/login'])
      },
      error => {
        console.log("exception occured");
      this.msg="Invalid credentials, please enter valid email Id and password";
      }


    )
  }
}

