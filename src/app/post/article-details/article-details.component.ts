import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostService } from '../post.service';
import { Post } from '../post.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleSubscription: Subscription;
  post: Post;
  articleId: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  onDelete() {
    const article = {
      ...this.post,
      id: this.articleId
    };
    this.postService.deleteArticle(article);
    this.router.navigate(['/article']);
  }

  onEdit(id: string) {}

  getArticle() {
    this.articleId = this.activatedRoute.snapshot.paramMap.get('id');
    return this.postService.getArticle(this.articleId)
    .subscribe(data => {
      this.post = data;
    });
  }

}
