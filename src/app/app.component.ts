import { Component, HostListener, OnInit } from '@angular/core';
import { UserWindowService } from './shared/services/user-window.service';
import { NavbarService } from './shared/services/navbar.service';
import { HomeService } from './shared/services/pages/home.service';
import { ContactInformationService } from './shared/services/pages/contact-information.service';
import { AuthService } from './admin/shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(
    private windowS: UserWindowService,
    private navbarS: NavbarService,
    private homeS: HomeService,
    private authS: AuthService,
    private contactInfoS: ContactInformationService
  ) { }
  
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowS.width = event.target.innerWidth
    this.windowS.height = event.target.innerHeight;
    this.homeS.homeSizeBlock();
    this.navbarS.resetToggle();
    this.contactInfoS.scaleBlockContactInfo();
  }

  ngOnInit(): void {
    this.authS.loginToAdmin();
    this.windowS.width = window.innerWidth
    this.windowS.height = window.innerHeight;
    this.homeS.homeSizeBlock();
    this.contactInfoS.scaleBlockContactInfo();
    this.navbarS.resetToggle();
  }

}
