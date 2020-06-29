import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AuthData } from './auth-data.model';
import { UiService } from '../shared/ui.service';
import { Router } from '@angular/router';
// import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  authChange = new Subject<boolean>();
  // private user: User;

  constructor(private uiService: UiService, private afAuth: AngularFireAuth, private router: Router) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/dashboard']);
      } else {
        this.authChange.next(false);
        this.router.navigate(['/article']);
        this.isAuthenticated = false;
      }
    }
    );
  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      this.uiService.loadingStateChanged.next(false);
    }
    ).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackBar(error.message, null, 3000);
    });
  }

  logout() {
    this.afAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

}
