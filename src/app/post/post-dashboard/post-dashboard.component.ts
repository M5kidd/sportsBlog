import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { PostService } from '../post.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  uploadPercent: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;

  isHovering: boolean;

  files: File[] = [];

  constructor(private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(event) {
    this.onUpload(event);
  }

  onUpload(event) {
    const file = event.target.files[0];
    const currentDate = Date.now();
    const fileName = file.name;
    if (file.type.split('/')[0] !== 'image') {
      alert('Only Image Files are Accepted');
    } else {
      const filePath = currentDate + '_' + fileName;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      // console.log(task);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      this.snapshot = task.snapshotChanges();
      console.log(this.snapshot);
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
          finalize(() => this.downloadURL = fileRef.getDownloadURL() )
       )
      .subscribe(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          this.postService.linkImgUrl(filePath, snap.totalBytes);
        }
      });

    }

    // isActive (snapshot) {
    //   return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
    // }

  }

  onSubmit(form: NgForm) {
    const createdArticle = {
      ...form.value,
      date: new Date().toISOString(),
    };
    this.postService.storeNewArticle(createdArticle);
  }

}
