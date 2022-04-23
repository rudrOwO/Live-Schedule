import { Component, OnInit } from '@angular/core';
import Period from '../models/period';
import Schedule from '../models/schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  constructor(private scheduleService: ScheduleService) {
    this.timeArray.push('Day/Time');

    for (let i = 8; i < 17; ++i) {
      const th = (h: number) => (h > 12 ? h - 12 : h);
      this.timeArray.push(`${th(i)}:00-${th(i + 1)}:00`);
    }
  }

  timeArray: string[] = [];
  schedule = this.scheduleService.getSchedule();

  getSchedule(): Schedule {
    return this.schedule;
  }
  
   getScheduleFromServer():void {
      this.scheduleService.getJSON();
  }

  ngOnInit(): void {}
}