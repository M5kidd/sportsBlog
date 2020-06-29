import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
  isAuth = true;
  authSub: Subscription;

  constructor(
    private postService: PostService,
    private route: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.authSub = this.authService.authChange.subscribe(statusChange => {
      this.isAuth = statusChange;
    });
    this.postsSubscription = this.postService.postsChanged.subscribe((posts: Post[]) => this.posts = posts);
    this.postService.getPosts();
  }

  onDelete(article: Post) {
    this.postService.deleteArticle(article);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
    this.authSub.unsubscribe();
  }
}
