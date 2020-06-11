import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleSubscription: Subscription;
  post: Post;
  articleId: string;

  constructor( private postService: PostService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    return this.postService.getArticle(id).subscribe(data => {
      this.post = data;
    });
  }

}
