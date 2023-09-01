import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Icustomer } from './icustomer';
import { Observable } from 'rxjs';
import { Iloginuser } from './iloginuser';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  login?: Iloginuser

  baseUrl: string = 'https://localhost:7118';

  addUser(user: Icustomer): Observable<object>{
    return this.http.post(`${this.baseUrl}/AddUser`, user)
  }

  getUserDetails(username: string, password: string): Observable<string>{
    this.login ={
      name: username,
      pass: password
    }
    return this.http.get<string>(`${this.baseUrl}/GetUser`)
  }
}
