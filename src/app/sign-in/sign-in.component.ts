import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router, private uService: UserService) { }
  user = new UserSignUp();

  ngOnInit(): void {
  }

  redirect(){
    if(this.user.pass1 === this.user.pass2){
    this.uService.postUserSignUpData(this.user);
    this.router.navigate(['login']);
    }
  }

}
