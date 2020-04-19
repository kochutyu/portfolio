import { Component, OnInit, Input, ViewChildren, QueryList, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { INavigate } from 'src/app/shared/interface/interfaces';
import { AuthService } from 'src/app/admin/shared/services/auth.service';

@Component({
  selector: 'app-mobile-tab',
  templateUrl: './mobile-tab.component.html',
  styleUrls: ['./mobile-tab.component.scss'],
  animations: [
    trigger('drop-down', [
      state('close', style({
        height: '0',
      })),
      state('open', style({
        height: 'calc(100vh - 70px)',
      })),
      transition('* <=> *', animate('500ms ease-in'))
    ]),
    trigger('filter', [
      state('close', style({
        height: '0',
      })),
      state('open', style({
        height: 'calc(100vh - 70px)',
      })),
      transition('* <=> *', animate('500ms ease-in'))
    ]),
  ]
})
export class MobileTabComponent implements OnInit, AfterViewInit {
  @Input() filters: string[];
  @Input() activeNav: INavigate[];
  indexPreviousRadio: number;
  text: string;


  constructor(
    public navbarS: NavbarService,
    private r: Renderer2,
    public windowS: UserWindowService,
    public authS: AuthService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  }


}
