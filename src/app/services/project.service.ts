import { Injectable } from '@angular/core';
import { BaseService } from '../core/BaseService';
import { RequestService } from './request.service';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService<Project> {

  public url = 'projects/';

  constructor(requestService: RequestService) {
    super(requestService);
  }
}
