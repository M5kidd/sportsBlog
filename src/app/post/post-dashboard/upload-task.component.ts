import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
// import { async } from '@angular/core/testing';

@Component({
  selector: 'app-upload-task',
  template: `<div *ngIf="percentage | async as pct"><progress [value]="pct" max="100"></progress>
  <!-- {{ pct | number}} -->
  %</div>
  <div *ngIf="snapshot | async as snap">{{ snap.bytesTransferred }} of {{ snap.totalBytes }}
    <div *ngIf="downloadURL as url">
      <h3>Results!</h3>
      <img [src]="url"><br>
      <a [href]="url" target="blank" rel="noopener">Download Me!</a>
    </div>
  </div>
  `,
  styles: []
})
export class UploadTaskComponent implements OnInit {
  @Input() file: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  ngOnInit(): void {
    this.startUpload();
  }

  startUpload() {
    const path = `test/${Date.now()}_${this.file.name}`;

    const ref = this.storage.ref(path);

    const task = this.storage.upload(path, this.file);
    console.log(this.task);

    // this.percentage = this.task.percentageChanges();

    // this.snapshot = this.task.snapshotChanges().pipe(
    //   tap(console.log),
    //   finalize( async () => {
    //     this.downloadURL = await ref.getDownloadURL().toPromise();

    //     this.db.collection('files').add( {downloadURL: this.downloadURL, path });
    //   })
    // );
  }

  isActive(snapshot) {
    return snapshot.state === 'running'
    && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
