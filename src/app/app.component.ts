import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: { name: string, link: string }[] = [];

  constructor(private authService: AuthService, router: Router) {
    if (!!authService.getUserToken()) {
      authService.isLoggedIn()
        .then(console.log)
        .catch(console.error);
    } else {
      router.navigate(['/auth']).then().catch();
    }
    this.menuItems.push(...[
      {
        name: 'Проекты',
        link: '/projects'
      }
    ]);
  }
}
