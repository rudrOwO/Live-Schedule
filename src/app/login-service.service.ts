import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient) { }

  weatherUrl : string = "http://127.0.0.1:4000/user/";

  readUser()
  {
    return  this.http.get<User[]>(this.weatherUrl);
  }
}
