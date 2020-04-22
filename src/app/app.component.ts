import { Component, HostListener, OnInit } from '@angular/core';
import { UserWindowService } from './shared/services/user-window.service';
import { NavbarService } from './shared/services/navbar.service';
import { HomeService } from './shared/services/pages/home.service';
import { ContactInformationService } from './shared/services/pages/contact-information.service';
import { AuthService } from './admin/shared/services/auth.service';
import { FilterService } from './shared/services/filter.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(
    public windowS: UserWindowService,
    private navbarS: NavbarService,
    private homeS: HomeService,
    private authS: AuthService,
    private contactInfoS: ContactInformationService,
    private filterS: FilterService
  ) { }

  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowS.width = event.target.innerWidth
    this.windowS.height = event.target.innerHeight;
    this.homeS.homeSizeBlock();
    
    this.navbarS.resetToggle();
    this.contactInfoS.scaleBlockContactInfo();
  }
  
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.windowS.scroll = window.pageYOffset;
  }

  ngOnInit(): void {
    this.filterS.getFilers().subscribe(works => {
      let filter = works.map(work => {
        return work.payload.doc.data().filter
      });
      const lengthFilterArr = filter.length;
      filter.forEach((items, i) => {
        filter = filter.concat(items);
      });
      filter = filter.splice(lengthFilterArr, filter.length - lengthFilterArr)
      let filters = [];
      filter.forEach(items => {
        const itemFilter: string = filter.find(item => item === items); // save filter

        if (itemFilter === 'All works') {
          filters.unshift(itemFilter);
        } else if (itemFilter === items) {
          filters.push(itemFilter);
        }

        filter = filter.filter(item => item !== items);
      });
      this.filterS.filters = filters;


    });
    this.authS.loginToAdmin();
    this.windowS.width = window.innerWidth
    this.windowS.height = window.innerHeight;
    this.windowS.scroll = window.pageYOffset;
    this.homeS.homeSizeBlock();
    this.contactInfoS.scaleBlockContactInfo();
    this.navbarS.resetToggle();
  }

}
