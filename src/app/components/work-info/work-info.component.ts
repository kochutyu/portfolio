import { Component, OnInit, Input } from '@angular/core';
import { CardPreviewService } from 'src/app/shared/services/card-preview.service';
import { IWorkInfo } from 'src/app/shared/interface/interfaces';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {
  @Input() workInfo: IWorkInfo


  constructor(
    public cardPreviewS: CardPreviewService
  ) { }

  ngOnInit(): void {
    console.log(this.workInfo);
    
  }

}
