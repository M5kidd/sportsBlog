import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    // ReactiveFormsModule,
    RouterModule
    // NavigationComponent
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarComponent,
    // ReactiveFormsModule,
    RouterModule
    // NavigationComponent
  ]
})
export class SharedModule { }
