import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(protected http: HttpClient) {
  }

  url: string = null;

  headers = { headers: { token: localStorage.getItem('token') } };

  getAllItems(params = {}): Promise<object> {
    return this.http.get( environment.host + this.url, { ...this.headers, params }).toPromise();
  }

  getItem(id: string): Promise<object> {
    return this.http.get(environment.host + this.url + id, { ...this.headers }).toPromise();
  }

  addItem(item): Promise<object> {
    return this.http.post(environment.host + this.url, { ...item }, { ...this.headers }).toPromise();
  }

  deleteItem(id: string): Promise<object> {
    return this.http.delete(environment.host + this.url + id, { ...this.headers }).toPromise();
  }

  updateItem(item): Promise<object> {
    return this.http.patch(environment.host + this.url + item.id, { ...item }, { ...this.headers }).toPromise();
  }

  getReq(url, params = {}, options = {}): Promise<object> {
    return this.http.get(environment.host + url, { ...this.headers, params, ...options }).toPromise();
  }

  postReq(url, body, options = {}): Promise<object> {
    return this.http.post(environment.host + url, { ...body }, { ...this.headers, ...options }).toPromise();
  }
}
