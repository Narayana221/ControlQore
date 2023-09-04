import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Icustomer } from './icustomer';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iloginuser } from './iloginuser';
import { IFilterroom } from './ifilterroom';

@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  login?: Iloginuser;

  baseUrl: string = 'https://localhost:7118';
  queryParams = new HttpParams();
  name?: string;

  private dataSource = new BehaviorSubject<Array<IFilterroom>>([]);
  data = this.dataSource.asObservable();

  emitData(value : Array<IFilterroom>)
  {
    this.dataSource.next(value);
  }

  addUser(user: Icustomer): Observable<object> {
    return this.http.post(`${this.baseUrl}/AddUser`, user);
  }

  getUserDetails(username: string, password: string): Observable<string> {
    this.login = {
      username: username,
      password: password,
    };
    return this.http.post(`${this.baseUrl}/GetUser`, this.login, {
      responseType: 'text',
    });
  }

  getHotelDetails(
    location: string,
    startDate: string,
    endDate: string,
    noOfRooms: number,
    rating: number
  ) {
    return this.http.get<Array<IFilterroom>>(
      `${this.baseUrl}/GetHotel?Rating=${rating}&LocationName=${location}&StartDate=${startDate}&EndDate=${endDate}&NoOfRooms=${noOfRooms}`
    );
  }
}
