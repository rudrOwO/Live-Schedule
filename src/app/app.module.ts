import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodComponent } from './period/period.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatePeriodComponent } from './create-period/create-period.component';

@NgModule({
  declarations: [
    AppComponent,
    PeriodComponent,
    ScheduleComponent,
    CreatePeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
