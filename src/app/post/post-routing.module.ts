import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListpageComponent } from './post-listpage/post-listpage.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'article', component: PostListpageComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'dashboard', component: PostDashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostRoutingModule { }
