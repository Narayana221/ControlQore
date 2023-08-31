import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Icustomer } from './icustomer';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'https://localhost:7118';

  addUser(user: Icustomer): Observable<object>{
    return this.http.post(`${this.baseUrl}/AddUser`, user)
  }

  getUserDetails(userName: string): Observable<Icustomer>{
    return this.http.get<Icustomer>(`${this.baseUrl}/api/Employee/GetdatabyId?id`)
  }
}
