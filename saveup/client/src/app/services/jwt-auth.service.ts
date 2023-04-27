import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/User";
import {UserLogin} from "../models/UserLogin";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  private REGISTER_URL = "/api/auth/register";
  private LOGIN_URL = "/api/auth/login";

  constructor(private httpClient: HttpClient) { }


  signupUser(user: User): Promise<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8');

    const body = JSON.stringify(user);

    return lastValueFrom(this.httpClient
      .post<User>(this.REGISTER_URL, body, { headers }));
  }

  loginUser(userLogin: UserLogin): Promise<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8');

    const body = JSON.stringify(userLogin);

    return lastValueFrom(this.httpClient
      .post<UserLogin>(this.LOGIN_URL, body, { headers }));
  }
}
