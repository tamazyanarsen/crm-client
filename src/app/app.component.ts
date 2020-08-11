import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RequestService } from './services/request.service';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService, snackBar: MatSnackBar, requestService: RequestService) {
        const isAdmin = false;
        requestService.get('auth/isAuth', {params: {token: requestService.getToken()}})
            .then((e) => {
                this.authService.setIsAuth(false);
                setTimeout(() => {
                    authService.setIsAuth(true);
                }, 0);
                // this.router.navigate(['/sales']).then();
            }).catch((e: HttpErrorResponse) => {
            if (e.status === 404 || e.status === 401) {
                this.authService.setIsAuth(false);
                this.router.navigate(['/']).then((res) => {
                    console.warn(`navigate to auth: /`, res);
                });
            }
        });
        // authService.setIsAuth(true);
        // setTimeout(() => {
        //   authService.setIsAuth(true);
        // }, 0);
        authService.getIsAuth().subscribe((e) => {
            this.isAuth = e;
            this.menuItems.splice(0, this.menuItems.length);
            this.menuItems.push(
                { name: 'Проекты', url: ['projects'], icon: '../assets/images/menu-platforms-icon.svg' },
            );
            if (authService.isAdmin) {
                // this.menuItems.push(
                //     { name: 'Пользователи', url: ['users'], icon: '../assets/images/menu-users-icon.svg' },
                // );
            }
        });
    }

    public menuItems: Menu[] = [];
    public isAuth = false;
    public selectedMenu: Menu;

    public ngOnInit(): void {
    }

    public menuTrackFn(ind, item: Menu) {
        return item.name;
    }

    public logout() {
        this.authService.logout()
            .then((e) => {
                localStorage.removeItem('user.auth.token');
                this.authService.setIsAuth(false);
                this.router.navigate(['/']);
            }).catch(console.warn);
    }
}

class Menu {
    public name: string;
    public url: string[];
    public icon: string;
}
