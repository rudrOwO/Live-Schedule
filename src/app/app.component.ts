import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from './schedule.service';
import Period from './models/period';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LiveSchedule';

  constructor(private router: Router, private schedule :ScheduleService ) { }

  listItems : Period[] = this.schedule.getRecentsPeriod();
  listTypes : String[] = this.schedule.getRecentType();
  
  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['signup']);
  }
  


}



