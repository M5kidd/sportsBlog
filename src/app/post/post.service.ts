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
  availablePosts: Post[] = [];
  postsChanged = new Subject<Post[]>();
  postDoc: AngularFirestoreDocument<Post>;

  constructor(private db: AngularFirestore, private route: Router) {}

  storeNewArticle(article: Post) {
    this.db.collection('posts').add(article);
    this.route.navigate(['article']);
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
      map(docArray => {
      return docArray.map(doc => {
        const data: any = doc.payload.doc.data();
        // console.log(data.date.toDate());
        return {
          id: doc.payload.doc.id,
          title: data.title,
          author: data.author,
          content: data.content,
          image: data.image,
          date: data.date.toDate(),
          // ...data
        };
      });
    }))
    .subscribe((posts: Post[]) => {
      this.availablePosts = posts;
      this.postsChanged.next([...this.availablePosts]);
    });
    }
   }
