import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RequestService } from './request.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    constructor(private requestService: RequestService) {
    }

    public token: string;
    public authSubject = new Subject<boolean>();
    public isAdmin = false;

    public url = 'auth/';

    public getIsAuth(): Subject<boolean> {
        return this.authSubject;
    }

    public setIsAuth(value: boolean) {
        this.authSubject.next(value);
    }

    public logout() {
        return this.requestService.post('accounts/logout/');
    }

    public login(user: { email, password }) {
        return this.requestService.post(this.url + 'login', { email: user.email, password: user.password }, {}, false);
    }

    public addItem(user: any) {
        return this.requestService.post('accounts/signup/', user);
    }

    public updateItem(user: any) {
        return this.requestService.patch(`accounts/users/${user.id}/`, user);
    }

    public deleteItem(userId) {
        return this.requestService.deleteReq(`accounts/users/${userId}/`);
    }

    public changePassword(user) {
        return this.requestService.post('accounts/password/change/', user);
    }

}
