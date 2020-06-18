import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

import { PostService } from '../post.service';
// import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  image: string;

  isHovering: boolean;

  files: File[] = [];
  // uploadedFile: File = null;

  constructor(private postService: PostService, private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files.item(i));
    }
      // this.uploadedFile = file;
    // reach to service and send.
      // console.log(files);
    }
  // uploadImage(event) {
  //   const file = event.target.files[0];
  //   const path = `article/${file.name}`;
  //   const filePath = 'name-your-file-path-here';
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file);
  //   if (file.type.split('/')[0] !== 'image') {
  //     return alert('Only Upload Image Files');
  //   } else {
  //     this.uploadPercent = task.percentageChanges();
  //     task.snapshotChanges().pipe(
  //       finalize(() => this.downloadURL = fileRef.getDownloadURL() )
  //       )
  //       .subscribe();
  //   }
  // }

  onSubmit(form: NgForm) {
    const createdArticle = {
      ...form.value,
      date: new Date().toISOString()
    };
    // console.log(createdArticle);
    this.postService.storeNewArticle(createdArticle);
  }

}
