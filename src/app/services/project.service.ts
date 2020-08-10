import { Injectable } from '@angular/core';
import { BaseService } from '../core/BaseService';
import { RequestService } from './request.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService extends BaseService<any> {

    public url = 'projects/';

    constructor(requestService: RequestService) {
        super(requestService);
    }
}
