import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NavbarService } from 'src/app/shared/services/navbar.service';

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
        'overflow-y': 'auto'
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
    private navbarS: NavbarService
  ) {
  }

  ngOnInit() {
  }

  thisItem(item): void {
    this.activeItem = item.target.value;
    this.filterS.filter = item.target.value;
    this.activeRadio = true;
    this.navbarS.statusOpenFilter = 'close'
  }
  filterWorks(): void {

  }

}
