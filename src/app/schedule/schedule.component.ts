import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import Period from '../models/period';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private router: Router, private schedule :ScheduleService ) { }

  listItems : Period[] = this.schedule.getRecentsPeriod();
  listTypes : String[] = this.schedule.getRecentType();

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(['signup']);
  }

}
