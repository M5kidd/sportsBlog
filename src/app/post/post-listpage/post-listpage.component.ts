import { Component, OnInit, OnDestroy } from '@angular/core';

import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-listpage',
  templateUrl: './post-listpage.component.html',
  styleUrls: ['./post-listpage.component.css']
})
export class PostListpageComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postsChanged.subscribe(posts => this.posts = posts);
    this.postService.getPosts();
  }

  onSelectArticle(articleId: Post) {
    this.route.navigate(['article', articleId]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
