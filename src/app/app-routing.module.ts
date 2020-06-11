import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListpageComponent } from './post/post-listpage/post-listpage.component';
import { ArticleDetailsComponent } from './post/article-details/article-details.component';
import { PostDashboardComponent } from './post/post-dashboard/post-dashboard.component';

const routes: Routes = [
  { path: 'article', component: PostListpageComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'dashboard', component: PostDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
