import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../schedule.service';
import Period from '../models/period';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.css'],
})
export class PeriodComponent implements OnInit {
  constructor(private schedule: ScheduleService,
    ) {}

  @Input() associatedPeriod: Period = new Period(0, 0, '', true, ['']);

  public bgColor = '';

  setPeriodToBeUpdated(): void {
    this.schedule.periodToBeUpdated = this.associatedPeriod;
    console.log(this.schedule.periodToBeUpdated);

  }

  ngOnInit(): void {
    this.bgColor = this.schedule.colorMap[this.associatedPeriod.courseCode];
  }

}
