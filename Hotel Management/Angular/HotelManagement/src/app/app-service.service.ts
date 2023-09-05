import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Icustomer } from './icustomer';
import { Observable } from 'rxjs';
import { Iloginuser } from './iloginuser';
import { Ibooking } from './ibooking';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  login?: Iloginuser

  baseUrl: string = 'https://localhost:7118';
  queryParams = new HttpParams();
  name?: string;

  addUser(user: Icustomer): Observable<object>{
    return this.http.post(`${this.baseUrl}/AddUser`, user)
  }

  getUserDetails(username: string, password: string): Observable<string>{
    this.login=  {
      username: username,
      password: password
    }
    return this.http.post(`${this.baseUrl}/GetUser`, this.login, {responseType: 'text'})
  }

  addBooking(booking:Ibooking){
    return this.http.post(`${this.baseUrl}/Addbooking`, booking)
  }
}
