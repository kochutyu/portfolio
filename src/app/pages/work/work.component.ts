import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/shared/services/pages/work.service';
import { IWorkInfo } from 'src/app/shared/model/work-info.model';
import { ITag } from 'src/app/shared/model/tag.model';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { Work } from 'src/app/shared/interface/interfaces';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: Work = {
    author: 'kochut',
    date: new Date(),
    descriptionWork: 'description',
    tags: [
      'Angular',
      'CSS',
      'JavaScript',
      'JQuery',
      'Angular',
    ],
    projectFeatures: ['Angular', 'CSS', 'HTML', 'JS'],
    showDemoURL: 'https://kochutyu.github.io/',
    sliderImgURL: [
      'https://picsum.photos/200',
      'https://picsum.photos/201',
      'https://picsum.photos/202',
      'https://picsum.photos/202',
      'https://picsum.photos/202',
      'https://picsum.photos/203'
    ]
  };
  showDemoURL: string;

  widthSlider: string = '100%';
  heightSlider: string = '500px';
  
  workInfo: IWorkInfo[] = [
    {
      img: './assets/img/components/pages/home/work/work-info/user.png',
      textData: 'kochutyu'
    },
    {
      img: './assets/img/components/pages/home/work/work-info/date.png',
      textData: '04.04.2020',
    },
  ]
  
  slider: string[];
  tags: string[] = []

  list: string[] = ['Angular', 'CSS', 'HTML', 'JS'];
  
  projectFeatures: string[];
  description: string;
  constructor(
    public workS: WorkService,
    public windowS: UserWindowService
  ) { }

  ngOnInit(): void {
    this.slider = this.work.sliderImgURL;
    this.tags = this.work.tags;
    this.projectFeatures = this.work.projectFeatures;
    this.description = this.work.descriptionWork;
    this.showDemoURL = this.work.showDemoURL;


    const randonNum = Math.ceil(3 + Math.random() * (6 - 3));
    this.list = this.slider.slice(0, randonNum);
  }

  showMoreWorks(): void{
    const randonNum = Math.ceil(3 + Math.random() * (6 - 3));
    console.log(randonNum);
    
    const random = this.slider.slice(0, randonNum);
    random.forEach(item => this.list.push(item))
    this.list.push()
  }
}
