import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // onGoogleLogin() {
  //   this.authService.onGoogleLogin();
  // }

  // onLogout() {
  //   this.authService.onLogout();
  // }

}
