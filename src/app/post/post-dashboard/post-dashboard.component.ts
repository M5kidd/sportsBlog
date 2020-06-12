import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const createdArticle = {
      ...form.value,
      date: new Date().toISOString()
    };
    this.postService.storeNewArticle(createdArticle);
  }

}
