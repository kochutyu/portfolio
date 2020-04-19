import { Component, OnInit, ViewChildren, ElementRef, ViewChild, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { AuthService } from 'src/app/admin/shared/services/auth.service';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  filters: string[];

  constructor(
    public navbarS: NavbarService,
    private r: Renderer2,
    public windowS: UserWindowService,
    public authS: AuthService,
    public filterS: FilterService
  ) { }

  ngOnInit(): void {
    this.filters = this.navbarS.filters;
  }



}
