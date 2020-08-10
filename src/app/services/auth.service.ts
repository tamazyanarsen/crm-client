import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  url = 'auth/';

  constructor(http: HttpClient) {
    super(http);
  }

  getUserToken(): string {
    return localStorage.getItem('token');
  }

  setUserToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): Promise<object> {
    return this.getReq(this.url + 'isAuth', { token: this.getUserToken() });
  }

  login(item): Promise<object> {
    return this.postReq(this.url + 'login', { ...item });
  }
}
