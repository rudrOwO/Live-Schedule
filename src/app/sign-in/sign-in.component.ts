import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router, private uService: UserService) { }
  user = new User();
  pass2 : String = "";
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage!:boolean;
  serverErrorMessages!: string;

  ngOnInit(): void {
  }

  redirect(){
   
    this.router.navigate(['login']);
    
  }

  submit(){
    if(this.user.password === this.pass2){
      console.log(this.user);
      this.uService.postUser(this.user).subscribe(
        res => {
          this.showSucessMessage = true;
          setTimeout(() => this.showSucessMessage = false, 4000);
          if(this.showSucessMessage == true){
            this.router.navigate(['/login']);
          }
        },
        err => {
          if (err.status === 422) {
            this.serverErrorMessages = err.error.join('<br/>');
            console.log(this.serverErrorMessages);
          }
          else
            this.serverErrorMessages = 'Something went wrong.';
            console.log(this.serverErrorMessages);
        }
      );
    }
  }
}


