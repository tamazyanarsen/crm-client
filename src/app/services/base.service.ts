import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(protected http: HttpClient) { }

  url: string = null;

  headers = { headers: { token: localStorage.getItem('token') } };

  getAllItems(params = {}): Observable<object> {
    return this.http.get(this.url, { ...this.headers, params });
  }

  getItem(id: string): Observable<object> {
    return this.http.get(this.url + id, { ...this.headers });
  }

  additem(item): Observable<object> {
    return this.http.post(this.url, { ...item }, { ...this.headers });
  }

  deleteItem(id: string): Observable<object> {
    return this.http.delete(this.url + id, { ...this.headers });
  }

  updateItem(item): Observable<object> {
    return this.http.patch(this.url + item.id, { ...item }, { ...this.headers });
  }

  getReq(url, params = {}): Observable<object> {
    return this.http.get(url, { ...this.headers, params });
  }
  postReq(url, body): Observable<object> {
    return this.http.post(url, { ...body }, { ...this.headers });
  }
}
