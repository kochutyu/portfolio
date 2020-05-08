import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Work } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filters: string[] = [];
  filter: string = "All works";
  activeItem: string;
  getIndex(): number{
    const filterWorkIndex: number = this.filters.findIndex((item) => this.filter.includes(item));
    this.activeItem = this.filter;
    console.log(filterWorkIndex);
    
    return filterWorkIndex
  }
  constructor(
    private firestore: AngularFirestore
  ) { }

  getFilers(): Observable<any[]> {
    return this.firestore.collection('works').snapshotChanges();
  }


}
