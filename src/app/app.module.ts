import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostDashboardComponent } from './post/post-dashboard/post-dashboard.component';
import { PostListpageComponent } from './post/post-listpage/post-listpage.component';
import { ArticleDetailsComponent } from './post/article-details/article-details.component';
import { AuthModule } from './auth/auth.module';
import { SidenavComponent } from './shared/sidenav/sidenav.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListpageComponent,
    ArticleDetailsComponent,
    PostDashboardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
