import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Post } from '../post.model';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-post-listpage',
  templateUrl: './post-listpage.component.html',
  styleUrls: ['./post-listpage.component.css']
})
export class PostListpageComponent implements OnInit, OnDestroy {
  posts: Post[];
  private postsSubscription: Subscription;

  constructor(
    private postService: PostService,
    public authService: AuthService
    ) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSubscription = this.postService.postsChanged.subscribe((posts: Post[]) => this.posts = posts);
  }

  onDelete(article: Post) {
    this.postService.deleteArticle(article);
  }

  // cancelSubscriptions() {
  //   this.mySubs.forEach(subs => subs.unsubscribe());
  // }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
