import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkService } from 'src/app/shared/services/pages/work.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { AboutService } from 'src/app/shared/services/pages/about.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { IAbout, Work, IProgress, ITags } from 'src/app/shared/interface/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  $about: Subscription;
  $works: Subscription;

  constructor(
    public aboutS: AboutService,
    public windowS: UserWindowService,
    private fireS: FirestoreService,
  ) { }
  ngOnDestroy(): void {
    this.$about.unsubscribe();
    this.$works.unsubscribe();
  }

  ngOnInit(): void {
    this.getAboutData();
    this.getWorksData();
  }

  getAboutData(): void {
    this.$about = this.fireS.getCollection('about').subscribe(items => {
      const IAboutArr: IAbout[] = items.map(item => {
        return {
          ...item.payload.doc.data(),
          id: item.payload.doc.id
        };
      });
      this.aboutS.about = IAboutArr[0];
    });
  }

  getWorksData(): void {
    this.$works = this.fireS.getCollection('works').subscribe(works => {
      const IWorksArr: Work[] = works.map(work => {
        return {
          ...work.payload.doc.data(),
          id: work.payload.doc.id
        };
      });
      this.aboutS.works = IWorksArr;
      this.getProgress();
    });
  }

  getProgress(): void {
    const IProgressArr: ITags[] = this.aboutS.works.map((work: Work, i) => {
      return {
        tags: work.tags
      }
    })
    this.aboutS.progressWorksNotFiltered = IProgressArr;
    this.aboutS.progressWorksFiltered = [];
    console.log('PROGRESS', IProgressArr);
    this.aboutS.getProgressPercent();
  }
}
