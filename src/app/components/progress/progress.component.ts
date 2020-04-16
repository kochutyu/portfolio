import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IProgress } from 'src/app/shared/interface/interfaces';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input() progress: IProgress[];
  
  constructor() {
  }
  
  ngAfterViewInit(): void {
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
