import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsChanged = new Subject<Post[]>();
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private db: AngularFirestore, private route: Router) {}

  storeNewArticle(article: Post) {
    this.db.collection('posts').add(article);
    this.route.navigate(['article']);
  }

  getArticleToEdit(articleId: string) {
    return this.db.collection('posts').doc(articleId);
  }

  deleteArticle(articleId: string) {
    return this.getArticleToEdit(articleId).delete();
  }

  updateArticle(articleId: string, formData) {
    return this.getArticleToEdit(articleId).update(formData);
  }

  getArticle(articleId: string) {
    // Reading individual article from database. Can cut down on reads if we get from our local stored array.
    this.postDoc = this.db.collection('posts').doc(articleId);
    return this.postDoc.valueChanges();
  }

   getPosts() {
    this.db
    .collection('posts')
    .snapshotChanges()
    .pipe(
      map((docArray: any) => {
      return docArray.map(doc => {
        const data: any = doc.payload.doc.data();
        const dateFormated = data.date;
        return {
          id: doc.payload.doc.id,
          title: data.title,
          author: data.author,
          content: data.content,
          image: data.image,
          date: dateFormated,
        };
      });
    }))
    .subscribe((posts: Post[]) => {
      this.postsChanged.next(posts);
    });
    }
   }
