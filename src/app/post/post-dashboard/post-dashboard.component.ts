import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  imagePath: string = null;
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onUpload(event: any) {
    const file = event.target.files[0];
    const currentDate = Date.now();
    const fileName = file.name;
    const filePath = 'images/' + currentDate + '_' + fileName;
    const fileRef = this.storage.ref(filePath);
    if (file.type.split('/')[0] !== 'image') {
      return alert('Only Image Files are Accepted');
    } else {
      const task = this.storage.upload(filePath, file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(
          finalize(() => fileRef.getDownloadURL().subscribe(url => {
            this.downloadURL = url;
          })
          )
       )
      .subscribe();
    }
  }

  onSubmit(form: NgForm) {
    const createdArticle = {
      ...form.value,
      image: this.downloadURL,
      date: new Date().toISOString(),
    };
    this.postService.storeNewArticle(createdArticle);
  }

}
