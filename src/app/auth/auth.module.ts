import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AngularFireAuthModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
