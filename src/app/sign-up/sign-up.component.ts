import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router :Router, private uService : UserService) { }
  user = new User();

  showSucessMessage!:boolean;
  serverErrorMessages!: string;

  ngOnInit(): void {
  }

  submit(){
    console.log(this.user);
    
    this.uService.loginUser(this.user).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        if(this.showSucessMessage == true){
          this.router.navigate(['']);
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
  
  
  redirect(){
    this.router.navigate(['signup']);
  }

}
