import { Injectable } from '@angular/core';
import { UserWindowService } from '../user-window.service';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationService {
  hover: boolean;
  phoneNumber: string = '+380 99 014 25 94';
  email: string = 'kochutyurawork@gmail.com';


  topBlock: string = '';
  rightBlock: string = '';
  bottomBlock: string = '';
  justifyBlock: string = '';
  flexDirectionBlock: string = '';
  transformBlock: string = '';


  topContext: string = ''
  rightContext: string = ''


  constructor(
    private windowS: UserWindowService
  ) { }

  scaleBlockContactInfo(): void {
    if (this.windowS.width >= 1300) {
      this.resetStyleForLargeDesctop();
    } else if (this.windowS.width < 1300) {
      this.resetStyleForMobileAndTabsAndSmallDesctop();
    } 
  }

  resetStyleForLargeDesctop(): void {
    // todo block
    this.transformBlock = 'scale(1)';
    this.flexDirectionBlock = 'column'
    this.justifyBlock = 'flex-end';
    this.topBlock = '28px';
    this.rightBlock = '28px';
    this.bottomBlock = '';

    // todo context
    this.topContext = '1px';
    this.rightContext = '0';

  }

  resetStyleForMobileAndTabsAndSmallDesctop(): void { 
    // todo block
    this.transformBlock = 'scale(0.7778)';
    this.flexDirectionBlock = 'column-reverse'
    this.justifyBlock = 'flex-start';
    this.topBlock = '';
    this.rightBlock = '18px';
    this.bottomBlock = '18px';

    // todo context
    this.topContext = '9px';
    this.rightContext = '9px';
  }
}
