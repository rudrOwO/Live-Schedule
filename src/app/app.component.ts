import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from './login-service.service';
import { User } from './user';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LiveSchedule';
  user : User[] = [];
  headers = ["name","email", "password"]
  constructor(private router: Router, private logServ: LoginServiceService) { }

  ngOnInit(): void {

  }

  signUp(){
    this.router.navigate(['signup']);
  }

  fetch(){
     this.logServ.readUser()
      .subscribe
        (
          (response) => 
          {
            this.user = response;
            console.log(this.user);
          },
          (error) =>
          {
            console.log("No Data Found" + error);
          }

        )
  }
  


}



