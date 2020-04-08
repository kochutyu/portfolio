import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IProgress } from 'src/app/shared/model/progress.model';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit, AfterViewInit {
  i: string = '50%'
  @Input() progress: IProgress[];
  
  constructor() {
  }
  
  ngAfterViewInit(): void {
    this.progress = this.progress.sort((a, b) => b.progress - a.progress);
  }

  ngOnInit() {
  }

  good(progress): boolean {
    return progress > 80 && progress <= 100
  }

  well(progress): boolean {
    return progress > 60 && progress <= 80
  }

  soSo(progress): boolean {
    return progress > 45 && progress <= 60
  }

  notBad(progress): boolean {
    return progress > 30 && progress <= 45
  }

  bad(progress): boolean {
    return progress > 0 && progress <= 30
  }

}
