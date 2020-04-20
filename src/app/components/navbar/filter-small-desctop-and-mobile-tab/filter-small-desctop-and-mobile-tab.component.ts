import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/services/pages/home.service';

@Component({
  selector: 'app-filter-small',
  templateUrl: './filter-small-desctop-and-mobile-tab.component.html',
  styleUrls: ['./filter-small-desctop-and-mobile-tab.component.scss'],
  animations: [
    trigger('filter', [
      state('close', style({
        height: '0',
      })),
      state('open', style({
        height: 'calc(100vh - 70px)',
        'overflow-y': 'hiden'
      })),
      transition('* <=> *', animate('500ms ease-in'))
    ]),
  ]
})
export class FilterSmallDesctopAndMobileTabComponent implements OnInit {


  activeItem: string = '';
  activeRadio: boolean;

  constructor(
    public filterS: FilterService,
    private navbarS: NavbarService,
    private router: Router,
    private homeS: HomeService
  ) {
  }

  ngOnInit() {
  }

  thisItem(item): void {
    this.activeItem = item.target.value;
    this.filterS.filter = item.target.value;
    this.activeRadio = true;
    this.navbarS.statusOpenFilter = 'close';
    this.navbarS.toggleDropDown();
    if (JSON.parse(localStorage.getItem('auth'))) {
      this.router.navigate(['/admin', 'all-works']);
    } else {
      this.router.navigate(['/home']);
    }
    this.homeS.scale0_5();
    setTimeout(() => {
      this.homeS.scale1();
    }, 500);
  }
  filterWorks(): void {

  }

}
