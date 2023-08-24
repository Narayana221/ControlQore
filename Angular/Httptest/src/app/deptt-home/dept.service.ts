import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idept } from './idept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  constructor(private http : HttpClient) { }
  baseUrl : string = "https://localhost:7178/api/Department";
  getAllDept()
  {
    return this.http.get<Array<Idept>>(`${this.baseUrl}/GetAll`)
  }
}
