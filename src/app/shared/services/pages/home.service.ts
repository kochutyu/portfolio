import { Injectable } from '@angular/core';
import { UserWindowService } from '../user-window.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  widthBlock: string = '150px';
  heightBlock: string = '150px';

  constructor(
    private windowS: UserWindowService
  ) { }

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
