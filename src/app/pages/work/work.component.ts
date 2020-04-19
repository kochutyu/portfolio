import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkService } from 'src/app/shared/services/pages/work.service';
import { ITag } from 'src/app/shared/model/tag.model';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { Work, IWorkInfo } from 'src/app/shared/interface/interfaces';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { CardPreviewService } from 'src/app/shared/services/card-preview.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit, OnDestroy {
  widthSlider: string = '100%';
  heightSlider: string = '500px';

  id: string;
  work: Work;
  works: Work[];
  $worksSub: Subscription;

  constructor(
    public workS: WorkService,
    public windowS: UserWindowService,
    private fireS: FirestoreService,
    private route: ActivatedRoute,
    public cardPrewviewS: CardPreviewService,
  ) { }
  ngOnDestroy(): void {
    this.cardPrewviewS.$otherWorksSub.unsubscribe();
  }

  ngOnInit(): void {
  }
  showMoreWorks() { }

  

}
