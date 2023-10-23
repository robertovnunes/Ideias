import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { dataResponse } from '../interfaces/dataResponse'

import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://127.0.0.1:3000/user/";
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
