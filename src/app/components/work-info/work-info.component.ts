import { Component, OnInit, Input } from '@angular/core';
import { IWorkInfo } from 'src/app/shared/model/work-info.model';

@Component({
  selector: 'app-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.scss']
})
export class WorkInfoComponent implements OnInit {
  @Input() workInfo: IWorkInfo


  constructor() { }

  ngOnInit(): void {
  }

}
