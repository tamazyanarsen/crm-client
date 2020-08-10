import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService extends BaseService {

  url = 'projects/';

  constructor(http: HttpClient) {
    super(http);
  }
}
