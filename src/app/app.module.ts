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
// import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { PostDashboardComponent } from './post/post-dashboard/post-dashboard.component';
import { PostListpageComponent } from './post/post-listpage/post-listpage.component';
import { ArticleDetailsComponent } from './post/article-details/article-details.component';
import { DropzoneDirective } from './post/post-dashboard/dropzone.directive';
import { UploadTaskComponent } from './post/post-dashboard/upload-task.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostListpageComponent,
    ArticleDetailsComponent,
    PostDashboardComponent,
    DropzoneDirective,
    UploadTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    // MaterialModule,
    CoreModule,
    SharedModule,
    FormsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
