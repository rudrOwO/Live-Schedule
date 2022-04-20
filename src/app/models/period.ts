export default class Period {
  startTime = 0;
  endTime = 0;
  courseCode = '';
  isTheory = true;
  courseTeachers: string[] = [];

  constructor(
    startTime: number,
    endTime: number,
    courseCode: string,
    isTheory: boolean,
    courseTeachers: string[]
  ) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.courseCode = courseCode;
    this.isTheory = isTheory;
    this.courseTeachers = courseTeachers;
  }
}
