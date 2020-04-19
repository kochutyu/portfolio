import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { CardPreviewService } from 'src/app/shared/services/card-preview.service';
import { Observable, Subscription } from 'rxjs';
import { Work } from 'src/app/shared/interface/interfaces';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthGuardService } from 'src/app/admin/shared/services/auth-guard.service';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.scss']
})
export class CardPreviewComponent implements OnInit, OnDestroy {
  @Input() list: any[];
  @Input() width: string;
  @Input() height: string;
  @Input() border: string;
  @Input() bgColor: string;
  @Input() imgPrewview: string;

  constructor(
    public windowS: UserWindowService,
    public cardPrewviewS: CardPreviewService,
    private router: Router,
    private route: ActivatedRoute,
    private fireS: FirestoreService
  ) { }
  ngOnDestroy(): void {
    // this.$worksSub.unsubscribe();
  }

  ngOnInit(): void {
  }

  showMore(work: Work): void {
    if (JSON.parse(localStorage.getItem('auth')) === true) {
      this.router.navigate(['/admin', 'work', 'edit', work.id]);
    }
    else {
      this.router.navigate(['/work', work.id]);
      this.id = work.id;
      this.getWorkPageData();
    }
  }

  id: string;
  work: Work;
  works: Work[];
  $worksSub: Subscription;

  getWorkPageData(): void {
    const data = () => {
      this.$worksSub = this.fireS.getCollection('works').subscribe(works => {
        this.work = works.map(work => {
          return {
            ...work.payload.doc.data(),
            id: work.payload.doc.id
          };
        }).find(work => work.id === this.id);

        this.works = works.map(work => {
          return {
            ...work.payload.doc.data(),
            id: work.payload.doc.id
          };
        }).filter(work => work.id !== this.id);

        this.cardPrewviewS.work = this.work;
        this.cardPrewviewS.otherWorks = this.works;
        this.cardPrewviewS.workInfo = {
          author: this.cardPrewviewS.work.author,
          date: this.cardPrewviewS.work.date,
        }

      })
      this.cardPrewviewS.$otherWorksSub = this.$worksSub;
    }

    if (this.cardPrewviewS.otherWorkVisited) {
      data();
    } else {
      data();
      this.cardPrewviewS.otherWorkVisited = true;
    }
  }



}
