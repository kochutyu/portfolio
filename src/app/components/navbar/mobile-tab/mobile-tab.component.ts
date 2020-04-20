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
    trigger('drop-1', [
      state('close', style({
        'transform': 'none',
        'top': '0',
        'background-color': '#fff',
        'border': 'none'
      })),
      state('open', style({
        'transform': 'rotate(45deg) translate(-8%, -25%)',
        'top': '50%',
        'background-color': '#1ab5b3',
        'border': '2px solid #fff'
      })),
      transition('* <=> *', animate('500ms ease-in'))
    ]),
    trigger('drop-2', [
      state('close', style({
        'opacity': '1'
      })),
      state('open', style({
        'opacity': '0'
      })),
      transition('* <=> *', animate('250ms ease-in'))
    ]),
    trigger('drop-3', [
      state('close', style({
        'transform': 'none',
        'bottom': '0',
        'background-color': '#fff',
        'border': 'none'
      })),
      state('open', style({
        'transform': 'rotate(-45deg) translate(-14%, 37%)',
        'bottom': '50%',
        'background-color': '#1ab5b3',
        'border': '2px solid #fff'
      })),
      transition('* <=> *', animate('500ms ease-in'))
    ])
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
