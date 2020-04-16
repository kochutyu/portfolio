import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getCollection(collection: string): Observable<any[]> {
    return this.firestore.collection(`${collection}`).snapshotChanges();
  }
}
