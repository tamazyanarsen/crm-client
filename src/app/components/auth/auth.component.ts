import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
    public formGroup;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private location: Location, private router: Router) {
        this.formGroup = formBuilder.group({
            email: null,
            password: null,
        });
        this.submitAuth = this.submitAuth.bind(this);
    }

    public ngOnInit() {
    }

    public submitAuth(event) {
        this.authService.login(this.formGroup.value).then((e: any) => {
            this.authService.token = e.token;
            this.authService.isAdmin = e.is_admin;
            this.authService.setIsAuth(true);
            localStorage.setItem('user.auth.token', e.token);
            // this.location.back();
            this.router.navigate(['/']).then();
        });
    }

}
