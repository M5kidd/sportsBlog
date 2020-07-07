import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PostListpageComponent } from './post-listpage/post-listpage.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  declarations: [
    PostListpageComponent,
    ArticleDetailsComponent,
    PostDashboardComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    PostRoutingModule
  ]
})
export class PostModule { }
