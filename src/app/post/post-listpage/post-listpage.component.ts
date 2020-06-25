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
  private postsSubscription: Subscription;

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    this.postsSubscription = this.postService.postsChanged.subscribe((posts: Post[]) => this.posts = posts);
    this.postService.getPosts();
  }

  onDelete(id: string) {
    this.postService.deleteArticle(id);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
