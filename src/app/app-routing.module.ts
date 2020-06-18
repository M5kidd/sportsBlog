import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { PostListpageComponent } from './post/post-listpage/post-listpage.component';
import { ArticleDetailsComponent } from './post/article-details/article-details.component';
import { PostDashboardComponent } from './post/post-dashboard/post-dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'article', component: PostListpageComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'dashboard', component: PostDashboardComponent, canActivate: [AuthGuard] },
  { path: '**', component: PostListpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
