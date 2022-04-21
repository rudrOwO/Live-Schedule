import { Injectable } from '@angular/core';
import { UserLogIn, UserSignUp } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }


 async postUserLogInData(user:UserLogIn) {
   console.log(user);
  return await fetch('https://10.100.104.19:8000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then(raw => raw.json());
 }


 async postUserSignUpData(user:UserSignUp) {
   console.log(user);
  return await fetch('https://10.100.104.19:8000/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user})
  })
  .then(raw => raw.json());
 }


}
