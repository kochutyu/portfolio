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
    private windowS: UserWindowService,
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

  ngOnInit(): void {
    this.filterS.getFilers().subscribe(works => {
      let filter = works.map(work => {
        return work.payload.doc.data().filter
      });
      // console.log("FILTER ARR", filter);
      const lengthFilterArr = filter.length;
      filter.forEach((items, i) => {
        filter = filter.concat(items);
      });
      // console.log("FILTER STR", filter);
      filter = filter.splice(lengthFilterArr, filter.length - lengthFilterArr)
      // console.log("FILTER ONLY STR", filter);
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

      console.log(filter);
      console.log(filters);
      this.filterS.filters = filters;
      

    });
    this.authS.loginToAdmin();
    this.windowS.width = window.innerWidth
    this.windowS.height = window.innerHeight;
    this.homeS.homeSizeBlock();
    this.contactInfoS.scaleBlockContactInfo();
    this.navbarS.resetToggle();
  }

}
