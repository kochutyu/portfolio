import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/shared/services/pages/work.service';
import { IWorkInfo } from 'src/app/shared/model/work-info.model';
import { ITag } from 'src/app/shared/model/tag.model';
import { UserWindowService } from 'src/app/shared/services/user-window.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  slider: string[] = [
    'https://picsum.photos/200',
    'https://picsum.photos/201',
    'https://picsum.photos/202',
    'https://picsum.photos/202',
    'https://picsum.photos/202',
    'https://picsum.photos/203'
  ];
  widthSlider: string = '100%';
  heightSlider: string = '500px';

  workInfo: IWorkInfo[] = [
    {
      img: './assets/img/components/pages/home/work/work-info/user.png',
      textData: 'kochutyu'
    },
    {
      img: './assets/img/components/pages/home/work/work-info/date.png',
      textData: '04.04.2020'
    },
  ]

  tags: ITag[] = [
    { tag: 'Angular' },
    { tag: 'CSS' },
    { tag: ' JavaScript ' },
    { tag: ' JQuery ' },
    { tag: ' Angular ' },
    { tag: ' CSS3 ' }
  ]

  list: string[] = ['Angular', 'CSS', 'HTML', 'JS'];
  

  description: string;
  constructor(
    public workS: WorkService,
    public windowS: UserWindowService
  ) { }

  ngOnInit(): void {
    this.description = this.workS.description;
    const randonNum = Math.ceil(3 + Math.random() * (6 - 3));

    this.list = this.slider.slice(0,randonNum);
  }

  showMoreWorks(): void{
    const randonNum = Math.ceil(3 + Math.random() * (6 - 3));
    console.log(randonNum);
    
    const random = this.slider.slice(0, randonNum);
    random.forEach(item => this.list.push(item))
    this.list.push()
  }
}
