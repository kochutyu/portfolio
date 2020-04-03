import { Injectable } from '@angular/core';
import { UserWindowService } from '../user-window.service';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationService {
  phoneNumber: string = '+380 99 014 25 94';
  email: string = 'kochutyurawork@gmail.com';



  topBlock: string = '';
  rightBlock: string = '';
  bottomBlock: string = '';
  justifyBlock: string = '';
  flexDirectionBlock: string = '';



  topContext: string = ''
  rightContext: string = ''
  transformBlock: string = '';


  constructor(
    private windowS: UserWindowService
  ) { }

  scaleBlockContactInfo(): void {
    if (this.windowS.width >= 1300) {
      this.resetStyleForLargeDesctop();
    } else if (this.windowS.width >= 1113 && this.windowS.width < 1300) {
      this.resetStyleForSmallDesctop();
    } else if (this.windowS.width < 1113) {
      this.resetStyleForMobileAndTabs();
    }
  }

  resetStyleForLargeDesctop(): void {
    this.topContext = '0';
    this.rightContext = '0';
    this.transformBlock = 'scale(1)';
    this.topBlock = '28px';
    this.rightBlock = '28px';
    this.flexDirectionBlock = 'column'
  }

  resetStyleForSmallDesctop(): void {
    this.topContext = '-10px';
    this.rightContext = '9px';
    this.transformBlock = 'scale(0.7778)';
    this.topBlock = '-12px';
    this.rightBlock = '19px';
    this.flexDirectionBlock = 'column'
  }

  resetStyleForMobileAndTabs(): void { 
    this.topContext = '10px';
    this.rightContext = '9px';
    this.flexDirectionBlock = 'column-reverse'
    this.transformBlock = 'scale(0.7778)';
    this.topBlock = '0';
    this.bottomBlock = '15px';
    this.justifyBlock = 'flex-start';
    this.rightBlock = '19px';
  }
}
