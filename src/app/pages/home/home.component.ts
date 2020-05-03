import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/shared/services/pages/home.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { ContactInformationService } from 'src/app/shared/services/pages/contact-information.service';
import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Work } from 'src/app/shared/interface/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CardPreviewService } from 'src/app/shared/services/card-preview.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  works: Work[];
  widthBlock: string;
  heightBlock: string;
  $worksSub: Subscription;

  list: any[] = [
    'https://picsum.photos/101',
    'https://picsum.photos/102',
    'https://picsum.photos/103',
    'https://picsum.photos/104',
    'https://picsum.photos/105',
    'https://picsum.photos/106',
    'https://picsum.photos/107',
    'https://picsum.photos/108',
    'https://picsum.photos/109',
    'https://picsum.photos/110',
    'https://picsum.photos/111',
    'https://picsum.photos/112',
    'https://picsum.photos/113',
    'https://picsum.photos/114',
  ];

  constructor(
    public homeS: HomeService,
    private http: HttpClient,
    public contactInfoS: ContactInformationService,
    private fireS: FirestoreService,
    public windowS: UserWindowService,
    public cardPreviewS: CardPreviewService
  ) { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    this.$worksSub = this.fireS.getCollection('works').subscribe(works => {
      this.cardPreviewS.allWorks = works.map(work => {
        return {
          ...work.payload.doc.data(),
          id: work.payload.doc.id,
          date: work.payload.doc.data().date.toDate()
        };
      })
      localStorage.setItem('allWorks', JSON.stringify(this.cardPreviewS.allWorks));
    })


  }


}
