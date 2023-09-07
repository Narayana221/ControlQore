import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Icustomer } from './icustomer';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iloginuser } from './iloginuser';
import { IFilterroom } from './ifilterroom';
import { Ibooking } from './ibooking';
import { Iroomtype } from './iroomtype';
import { Ibookhome } from './ibookhome';


@Injectable({
  providedIn: 'root',
})
export class AppServiceService {
  constructor(private http: HttpClient) {}

  login?: Iloginuser;

  baseUrl: string = 'https://localhost:7118';
  queryParams = new HttpParams();
  name?: string;
  

  tempbooking: Ibookhome = {
    noOfRooms: 0,
    StartDate: '',
    EndDate: ''
  }

  private bookingDetail = new BehaviorSubject<Ibookhome>(this.tempbooking)
  book = this.bookingDetail.asObservable()

  emitbookingDetail(value: Ibookhome){
    this.bookingDetail.next(value)
  }

  private tempuserId = new BehaviorSubject<number>(0)
  userId = this.tempuserId.asObservable()

  editUserId(value: number){
    this.tempuserId.next(value)
  }
  
  private dataSource = new BehaviorSubject<Array<IFilterroom>>([]);
  data = this.dataSource.asObservable();

  emitData(value : Array<IFilterroom>)
  {
    this.dataSource.next(value);
  }
  tempRoomType: Iroomtype ={
    roomCost: 0,
    roomTypeId:0,
    roomName: ''
  }
  private hotelId = new BehaviorSubject<number>(0);
  selectedHotelId = this.hotelId.asObservable();

  emitHotelId(value:number)
  {
    this.hotelId.next(value); 
  }

  private roomTypeId = new BehaviorSubject<Iroomtype>(this.tempRoomType);
  selectedroomTypeId = this.roomTypeId.asObservable();

  emitroomTypeId(value:Iroomtype)
  { 
    this.roomTypeId.next(value); 
  }

  addUser(user: Icustomer): Observable<object> {
    return this.http.post(`${this.baseUrl}/AddUser`, user);
  }

  getUserDetails(username: string, password: string): Observable<any> {
    this.login = {
      username: username,
      password: password,
    };
    return this.http.post(`${this.baseUrl}/GetUser`, this.login);
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

  addBooking(booking:Ibooking){
    return this.http.post(`${this.baseUrl}/Addbooking`, booking)
  }

  getRoomType(hotelId:number){
    return this.http.get<Array<Iroomtype>>(`${this.baseUrl}/GetRoomType?HotelId=${hotelId}`)

  }
}
