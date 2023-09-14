import { Injectable } from "@angular/core";
import { IUserDto } from "../i-user-dto";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private router: Router) {}
    user?:IUserDto;
    getUser() {
        if (this.user) return this.user;
        const tempData = localStorage.getItem('session')
        if (!tempData) {
            this.router.navigate(['']);
            return;
        };
        this.user = JSON.parse(tempData!);
        return this.user;
    }
}