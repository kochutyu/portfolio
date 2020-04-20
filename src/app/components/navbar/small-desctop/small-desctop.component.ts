import { Component, OnInit, Input, ViewChildren, QueryList, Renderer2, AfterViewInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { INavigate } from 'src/app/shared/interface/interfaces';
import { AuthService } from 'src/app/admin/shared/services/auth.service';

@Component({
  selector: 'app-small-desctop',
  templateUrl: './small-desctop.component.html',
  styleUrls: ['./small-desctop.component.scss'],
  animations: [
    trigger('filter', [
      state('close', style({
        height: '0',
      })),
      state('open', style({
        height: 'calc(100vh - 70px)',
        'overflow-y': 'hidden',
      })),
      transition('* <=> *', animate('500ms ease-in'))
    ]),
  ]
})
export class SmallDesctopComponent implements OnInit, AfterViewInit {
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
