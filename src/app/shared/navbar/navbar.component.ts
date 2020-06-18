import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/auth.service';

// import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(statusChange => {
      this.isAuth = statusChange;
    });
  }

  onLogout() {
    this.authService.logout();
  }

  // onGoogleLogin() {
  //   this.authService.onGoogleLogin();
  // }

  // onLogout() {
  //   this.authService.onLogout();
  // }

}
