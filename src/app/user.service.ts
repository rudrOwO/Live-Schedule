import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

postUser(user: User){
  return this.http.post('http://localhost:3000/api'+'/register',user);
}

loginUser(user: User){
  return this.http.post('http://localhost:3000/api'+'/login',user);
}


}
