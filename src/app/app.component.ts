import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(http: HttpClient) {
    http.get('http://127.0.0.1:8000',
      { headers: new HttpHeaders().append('token', localStorage.getItem('token')), params: { a: '12' } })
      .toPromise()
      .then(console.log)
      .catch(console.error);
  }
}
