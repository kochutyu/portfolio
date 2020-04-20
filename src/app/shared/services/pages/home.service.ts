import { Injectable } from '@angular/core';
import { UserWindowService } from '../user-window.service';
import { start } from 'repl';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  widthBlock: string = '150px';
  heightBlock: string = '150px';
  animate: string = 'end';
  constructor(
    private windowS: UserWindowService
  ) { }

  scale0_5(): void {
    this.animate = 'start';
  }
  
  scale1(): void {
    this.animate = 'end';
  }

  homeSizeBlock(): void {
    if (this.windowS.width >= 1600) {
      this.widthBlock = 'calc(25% - 6px)';
      this.heightBlock = '320px';
    } else if (this.windowS.width >= 1300) {
      this.widthBlock = 'calc(25% - 6px)';
      this.heightBlock = '250px';
    } else if (this.windowS.width >= 1113 && this.windowS.width < 1300) {
      this.widthBlock = 'calc(50% - 6px)';
      this.heightBlock = '400px'; this.widthBlock = 'calc(50% - 6px)';
      this.heightBlock = '400px';
    } else if (this.windowS.width < 1113 && this.windowS.width >= 600) {
      this.widthBlock = 'calc(100% - 6px)';
      this.heightBlock = '500px';
    } else if (this.windowS.width < 600) {
      this.widthBlock = 'calc(100% - 6px)';
      this.heightBlock = '35vh';
    }
  }
}
