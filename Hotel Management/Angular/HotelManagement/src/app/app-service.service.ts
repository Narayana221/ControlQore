import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Icustomer } from './icustomer';
import { BehaviorSubject, Observable } from 'rxjs';
import { Iloginuser } from './iloginuser';
import { IFilterroom } from './ifilterroom';
import { Ibooking } from './ibooking';
import { Iroomtype } from './iroomtype';
import { Ibookhome } from './ibookhome';
import { Imanager } from './imanager';
import { Iroom } from './iroom';
import { IRoomDetails } from './i-room-details';
import { Ipreviousbooking } from './ipreviousbooking';
import { Irating } from './irating';
import { Ichechinout } from './ichechinout';
import { Inoofrooms } from './inoofrooms';
import { Iuserreq } from './iuserreq';

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
    EndDate: '',
  };

  private bookingDetail = new BehaviorSubject<Ibookhome>(this.tempbooking);
  book = this.bookingDetail.asObservable();

  emitbookingDetail(value: Ibookhome) {
    this.bookingDetail.next(value);
  }

  private tempuserId = new BehaviorSubject<number>(0);
  userId = this.tempuserId.asObservable();

  emitUserId(value: number) {
    this.tempuserId.next(value);
  }

  private dataSource = new BehaviorSubject<Array<IFilterroom>>([]);
  data = this.dataSource.asObservable();

  emitData(value: Array<IFilterroom>) {
    this.dataSource.next(value);
  }

  private tempNoOfRooms = new BehaviorSubject<number>(0);
  noOfROoms = this.tempNoOfRooms.asObservable();

  emitNoOfRooms(value: number){
    this.tempNoOfRooms.next(value)
  }

  tempRoomType: Iroomtype = {
    roomCost: 0,
    roomTypeId: 0,
    roomName: '',
  };
  tempHotelDetials: IFilterroom = {
    id: 0,
    name: '',
    location: '',
    rating: 0,
    roomId: 0,
  };

  tempnoofRooms: Inoofrooms = {
    id: 0,
    noofrooms: 0,
    hotelName: ''
  }

  private hotelId = new BehaviorSubject<Inoofrooms>(this.tempnoofRooms);
  selectedHotelId = this.hotelId.asObservable();

  emitHotelId(value : Inoofrooms ) {
    this.hotelId.next(value);
  }

  private roomTypeId = new BehaviorSubject<Iroomtype>(this.tempRoomType);
  selectedroomTypeId = this.roomTypeId.asObservable();

  emitroomTypeId(value: Iroomtype) {
    this.roomTypeId.next(value);
  }
  tempUserReq1: Iuserreq = {
    locationId: 0,
    startDate: '',
    endDate: '',
    noOfRooms: 0,
    rating: 0,
  }
  private tempUserReq = new BehaviorSubject<Iuserreq>(this.tempUserReq1)
  userReq = this.tempUserReq.asObservable()

  emitUserReq(value: Iuserreq){
    this.tempUserReq.next(value)
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

  getHotelDetails(userReq: Iuserreq) {
    return this.http.get<Array<IFilterroom>>(
      `${this.baseUrl}/GetHotel?Rating=${userReq.rating}&LocationId=${userReq.locationId}&StartDate=${userReq.startDate}&EndDate=${userReq.endDate}&NoOfRooms=${userReq.noOfRooms}`
    );
  }

  cancelBooking(bookingId: number,bookedroomId:number) {
     return this.http.delete(`${this.baseUrl}/Cancel?BookingId=${bookingId}&&BookedRoomId=${bookedroomId}`);
  }

  addBooking(booking: Ibooking) {
    return this.http.post(`${this.baseUrl}/Addbooking`, booking);
  }

  addRating(rateInfo: Irating) {
    return this.http.put(`${this.baseUrl}/Rating`, rateInfo);
  }

  addManager(manager: Imanager) {
    return this.http.post(`${this.baseUrl}/AddManager`, manager);
  }

  getRoomType(hotelIdNoRooms: Inoofrooms, userReq: Iuserreq) {
    return this.http.get<Array<Iroomtype>>(
      `${this.baseUrl}/GetRoomType?HotelId=${hotelIdNoRooms.id}&NoOfRooms=${hotelIdNoRooms.noofrooms}&Rating=${userReq.rating}&LocationId=${userReq.locationId}&StartDate=${userReq.startDate}&EndDate=${userReq.endDate}`
    );
  }

  getBookingDetailManager(userId: number) {
    return this.http.get<Array<IRoomDetails>>(
      `${this.baseUrl}/GetRoomDetails?id=${userId}`
    );
  }

  getAllBookingDetailManager(userId: number, flag:boolean = true) {
    return this.http.get<Array<IRoomDetails>>(
      `${this.baseUrl}/GetRoomDetails?id=${userId}&flag=${flag}`
    );
  }

  getPreviousBooking(userId: number) {
    return this.http.get<Array<Ipreviousbooking>>(
      `${this.baseUrl}/GetUserBookings?Id=${userId}`
    );
  }

  checkInOut?: Ichechinout

  updateCheckIn(checkIn: Date, checkOut: Date, roomId: number, bookingId: number){
    this.checkInOut={
      checkIn: checkIn,
      checkOut: checkOut,
      roomId: roomId,
      bookingId: bookingId
    }
    return this.http.put(`${this.baseUrl}/UpdateBookedRoom`, this.checkInOut )
  }


}
