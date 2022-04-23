import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { PeriodComponent } from './period/period.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CreatePeriodComponent } from './create-period/create-period.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    PeriodComponent,
    ScheduleComponent,
    CreatePeriodComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
