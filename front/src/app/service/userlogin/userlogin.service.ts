import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";


class dataResponse {
  message = '';
  status_code = '';
  data!: User;
}

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  private apiUrl = "http://127.0.0.1:3000/user/";
  constructor(private http: HttpClient) { }

  getUser(value: string | null){
    let response = this.http.get<dataResponse>(this.apiUrl.toString()+value);
    if (response === null) {
      throw new Error('User not found');
    }
    return response;
  }
}
