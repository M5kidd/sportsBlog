import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

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
  // isAuth = false;
  // private authSub: Subscription;
  // private mySubs: Subscription[] = [];

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
