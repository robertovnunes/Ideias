import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { dataResponse } from './dataResponse'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = "http://127.0.0.1:3000/user/test";
  constructor(private http: HttpClient) { }

  getUser(value: string | null){
    let response = this.http.get<dataResponse>(this.apiUrl.toString()+value);
    if (response === null) {
      throw new Error('User not found');
    }
    return response;
  }

  updateUser(user: User){
    let response = this.http.patch<dataResponse>(this.apiUrl.toString()+user.username, user);
    if (response === null) {
      throw new Error('User not found');
    }
    return response;
  }
}
