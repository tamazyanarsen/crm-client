import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm;

  constructor(fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.authForm = fb.group({
      login: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.authForm.value);
    this.authService.login(this.authForm.value)
      .then((e: any) => {
        if (!e.error && e.token) {
          this.authService.setUserToken(e.token);
          this.router.navigate(['/']).then();
        } else {
          alert(e.error);
        }
      })
      .catch(console.error);
  }

}
