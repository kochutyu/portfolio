import { Component, OnInit } from '@angular/core';
import { WorkService } from 'src/app/shared/services/pages/work.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { AboutService } from 'src/app/shared/services/pages/about.service';
import { ITag } from 'src/app/shared/model/tag.model';
import { IProgress } from 'src/app/shared/model/progress.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  slider: string[] = [
    'https://picsum.photos/200',
    'https://picsum.photos/201',
    'https://picsum.photos/202',
    'https://picsum.photos/202',
    'https://picsum.photos/202',
    'https://picsum.photos/203'
  ];

  tags: ITag[] = [
    { tag: 'Angular' },
    { tag: 'CSS' },
    { tag: ' JavaScript ' },
    { tag: ' JQuery ' },
    { tag: ' Angular ' },
    { tag: ' CSS3 ' }
  ];

  list: string[] = ['Angular', 'CSS', 'HTML', 'JS'];
  
  progress:IProgress[] =[
    {
      subject: 'CSS',
      progress: 82
    },
    {
      subject: 'HTML',
      progress: 65
    },
    {
      subject: 'Angular',
      progress: 47
    },
    {
      subject: 'React',
      progress: 33
    },
    {
      subject: 'JQuery',
      progress: 25
    },
    {
      subject: 'Vue',
      progress: 29
    }
  ]

  description: string;

  constructor(
    public aboutS: AboutService,
    public windowS: UserWindowService
  ) { }

  ngOnInit(): void {
    this.description = this.aboutS.description
  }

}
