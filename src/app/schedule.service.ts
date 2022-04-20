import { Injectable } from '@angular/core';
import Schedule from './models/schedule';
import Period from './models/period';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor() {}

  colorMap: any = {
    'SE 511': '#0891b2',
    'CSE 502': '#db2777',
    'BUS 503': '#059669',
    'CSE 504': '#0284c7',
    'SE 505': '#0d9488',
    'SE 506': '#0891b2',
  };

  mapCourseToTeachers: any = {
    'SE 511': ['ZB', 'MSI'],
    'CSE 502': ['AS', 'MA'],
    'BUS 503': ['IA'],
    'CSE 504': ['MS', 'KKG'],
    'SE 505': ['AS', 'MA'],
    'SE 506': ['SA', 'KKG'],
  };

  // Changelog Service [By Proma]
  recentlyAddedList: Period[] = [
    new Period(0, 0, 'SE 511', true, ['AB', 'CD']),
  ];

  recentlyChangedList: Period[] = [
    new Period(0, 0, 'SE 511', true, ['AB', 'CD']),
  ];

  recentlyRemovedList: Period[] = [
    new Period(0, 0, 'SE 511', true, ['AB', 'CD']),
  ];

  // HTTP to be Processed [By Rudro]
}
