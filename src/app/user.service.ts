import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }


 async postUserLogInData(user:any) {
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


 async postUserSignUpData(user:any) {
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
