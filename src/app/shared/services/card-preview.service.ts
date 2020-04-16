import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Work, IWorkInfo } from '../interface/interfaces';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CardPreviewService {
  work: Work = {
    author: null,
    date: null,
    descriptionWork: null,
    projectFeatures: null,
    showDemoURL: null,
    id: null,
    sliderImgURL: null,
    tags: null
  };

  otherWorks: Work[];
  $otherWorksSub: Subscription;

  workInfo: IWorkInfo = {
    author: this.work.author,
    date: this.work.date,
  };

  otherWorkVisited: boolean;

  constructor(
    private route: ActivatedRoute,
    private fireS: FirestoreService,
  ) { 

  }



}
