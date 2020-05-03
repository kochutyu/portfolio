import { Component, OnInit } from '@angular/core';
import { Work, IWorkInfo, ITags } from 'src/app/shared/interface/interfaces';
import { CardPreviewService } from 'src/app/shared/services/card-preview.service';
import { WorkService } from 'src/app/shared/services/pages/work.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewWorkService } from '../../shared/new-work.service';

@Component({
  selector: 'app-new-work',
  templateUrl: './new-work.component.html',
  styleUrls: ['./new-work.component.scss']
})
export class NewWorkComponent implements OnInit {
  form: FormGroup;

  work: Work = {
    author: null,
    date: new Date(),
    descriptionWork: null,
    projectFeatures: null,
    showDemoURL: null,
    id: null,
    sliderImgURL: null,
    tags: null
  };

  workInfo: IWorkInfo = {
    author: null,
    date: null,
  };

  editStatus: boolean;

  constructor(
    public workS: WorkService,
    public windowS: UserWindowService,
    private fireS: FirestoreService,
    private route: ActivatedRoute,
    public cardPrewviewS: CardPreviewService,
    public newWorkS: NewWorkService,
    private router: Router
  ) { }
  ngOnDestroy(): void {
  }


  ngOnInit(): void {
    this.newWorkS.reset();
    if (this.route.snapshot.params['id']) {
      this.work.id = this.route.snapshot.params['id'];
      this.newWorkS.editStatus = true;
      this.getDataForEdit();
    }

    this.form = new FormGroup({
      author: new FormControl('kochutyu', [Validators.required]),
      descriptionWork: new FormControl(null, [Validators.required]),
      tags: new FormControl(null, [Validators.required]),
      imgURL: new FormControl(null, [Validators.required]),
      projectFeatures: new FormControl(null, [Validators.required]),
      showDemoURL: new FormControl(null, [Validators.required]),
      filter: new FormControl(null, [Validators.required]),
    });
    if (!this.newWorkS.editStatus) {
      this.getTime();
    } else {
      this.workInfo = {
        author: this.form.value.author,
        date: this.work.date
      }
    }

  }

  getDataForEdit(): void {
    const workID = this.route.snapshot.params['id'];
    const work$ = this.fireS.getCollection('works').subscribe(works => {
      const work: Work = works.map(work => {
        console.log(work.payload.doc.date);
        
        return {
          ...work.payload.doc.data(),
          id: work.payload.doc.id,
          date: work.payload.doc.data().date.toDate()
        }
      }).find((work: Work) => work.id === workID);

      this.form = new FormGroup({
        author: new FormControl(work.author, [Validators.required]),
        descriptionWork: new FormControl(work.descriptionWork, [Validators.required]),
        tags: new FormControl(null, [Validators.required]),
        imgURL: new FormControl(null, [Validators.required]),
        projectFeatures: new FormControl(null, [Validators.required]),
        showDemoURL: new FormControl(work.showDemoURL, [Validators.required]),
        filter: new FormControl(null, [Validators.required]),
      });

      console.log(work.date);

      this.workInfo = {
        author: work.author,
        date: work.date,
      }
      
      
      this.newWorkS.sliderImgURL = work.sliderImgURL;
      this.newWorkS.tags = work.tags;
      this.newWorkS.projectFeatures = work.projectFeatures;
      this.newWorkS.filter = work.filter;

      work$.unsubscribe();

    });
  }
  showMoreWorks() { }

  getTime(): void {
    setInterval(() => {
      this.workInfo = {
        author: this.form.value.author,
        date: new Date()
      }
    }, 1000);
  }

  newImg(): void {
    const url = this.form.value.imgURL;
    if (url.trim()) {
      this.newWorkS.addImg(url);
      this.form.value.imgURL = '';
    }
  }

  removeImg(): void {
    const url = this.form.value.imgURL;
    if (url.trim()) {
      this.newWorkS.removeImg(url);
    }
  }

  setOnPreview(): void {
    const url = this.form.value.imgURL;
    if (url.trim()) {
      this.newWorkS.setOnPreview(url);
    }
  }

  addTag(): void {
    const tag = this.form.value.tags;
    if (tag.trim()) {
      this.newWorkS.addTag(tag);
      this.form.value.imgURL = '';
    }
  }

  removeTag(): void {
    const tag = this.form.value.tags;
    if (tag.trim()) {
      this.newWorkS.removeTag(tag);
      this.form.value.imgURL = '';
    }
  }

  addProjectFeatures(): void {
    const projectFeature = this.form.value.projectFeatures;
    if (projectFeature.trim()) {
      this.newWorkS.addProjectFeatures(projectFeature);
      this.form.value.imgURL = '';
    }
  }

  removeProjectFeatures(): void {
    const projectFeature = this.form.value.projectFeatures;
    if (projectFeature.trim()) {
      this.newWorkS.removeProjectFeatures(projectFeature);
      this.form.value.imgURL = '';
    }
  }

  submit(): void {
    this.work = {
      date: new Date(),
      author: this.form.value.author,
      descriptionWork: this.form.value.descriptionWork,
      projectFeatures: this.newWorkS.projectFeatures,
      showDemoURL: this.form.value.showDemoURL,
      sliderImgURL: this.newWorkS.sliderImgURL,
      tags: this.newWorkS.tags,
      filter: this.newWorkS.filter
    }
    console.log(this.work);
    this.form.reset();
    this.newWorkS.reset();
    this.fireS.setWork(this.work);
    this.router.navigate(['/admin', 'all-works']);
  }

  update(): void {
    this.work = {
      id: this.work.id,
      date: this.work.date,
      author: this.form.value.author,
      descriptionWork: this.form.value.descriptionWork,
      projectFeatures: this.newWorkS.projectFeatures,
      showDemoURL: this.form.value.showDemoURL,
      sliderImgURL: this.newWorkS.sliderImgURL,
      tags: this.newWorkS.tags,
      filter: this.newWorkS.filter
    }
    this.newWorkS.updateWork(this.work);
    this.router.navigate(['/admin', 'all-works']);
  }


  addFilter(): void {
    const filter = this.form.value.filter;
    if (filter.trim()) {
      this.newWorkS.addFilter(filter);
      this.form.value.imgURL = '';
    }
  }

  removeFilter(): void {
    const filter = this.form.value.filter;
    if (filter.trim()) {
      this.newWorkS.removeFilter(filter);
      this.form.value.imgURL = '';
    }
  }


}
