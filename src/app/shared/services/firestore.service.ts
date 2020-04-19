import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Work } from '../interface/interfaces';
import { AngularFireStorage } from '@angular/fire/storage/storage';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  setWork(work: Work, id?: string): void {
    id = this.firestore.createId();
    this.firestore.collection('works').doc(id).set(work);
  }

  getCollection(collection: string): Observable<any[]> {
    return this.firestore.collection(`${collection}`).snapshotChanges();
  }
}
