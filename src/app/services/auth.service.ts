import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

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

  isLoggedIn(): Observable<object> {
    return this.getReq(this.url + 'isAuth', this.getUserToken());
  }
}
