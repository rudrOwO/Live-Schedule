import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogIn } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router :Router, private uService : UserService) { }
  user : UserLogIn = new UserLogIn();

  ngOnInit(): void {
  }

  submit(){
    console.log(this.user);
    this.uService.postUserLogInData(this.user);
    
  }
  redirect(){
    this.router.navigate(['signup']);
  }

}
