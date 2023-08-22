import { Injectable } from '@angular/core';
import { IEmployee } from './iemployee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}
  url = 'https://localhost:7178/api/Employee';
  getData() {
    return this.http.get<Array<IEmployee>>(`${this.url}/GetAll`);
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.url}/AddEmployee`, employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete<IEmployee>(`${this.url}/Delete/?id=${id}`);
  }

  updateEmployee(employee: IEmployee,id: number) {
    return this.http.put<IEmployee>(`${this.url}/Update?id=${id}`, employee);
  }
}
