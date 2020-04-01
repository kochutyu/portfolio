import { Component, OnInit, Input, ViewChildren, QueryList, Renderer2, AfterViewInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { UserWindowService } from 'src/app/shared/services/user-window.service';

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
        'overflow-y': 'auto'
      })),
      transition('* <=> *', animate('500ms cubic-bezier(1,.25,1,-0.06)'))
    ]),
    trigger('filter', [
      state('close', style({
        height: '0',
      })),
      state('open', style({
        height: 'calc(100vh - 70px)',
        'overflow-y': 'auto'
      })),
      transition('* <=> *', animate('500ms cubic-bezier(1,.25,1,-0.06)'))
    ]),
  ]
})
export class MobileTabComponent implements OnInit, AfterViewInit {
  @Input() paths: string[];
  @Input() filters: string[];

  @ViewChildren(FilterListComponent) hellos: QueryList<any>;  // list item of filters
  indexPreviousRadio: number;
  text: string;


  constructor(
    public navbarS: NavbarService,
    private r: Renderer2,
    public windowS: UserWindowService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.selectFirstElementOfFilterWorks();
  }

  selectFirstElementOfFilterWorks(): void {
    this.hellos.forEach((item, i) => {
      const li = item.__ngContext__[14][20];
      const inputRadio = item.__ngContext__[14][22];

      if (i === 0) {
        inputRadio.checked = true
        this.r.setStyle(li, 'color', '#fff');
        this.indexPreviousRadio = i;
      } else {
        this.r.setStyle(li, 'color', '#6b7072');
      }
    });
  }

  selectItemElementOfFilterWorks(): void {
    this.hellos.forEach((item, i) => {
      const li = item.__ngContext__[14][20];
      const inputRadio = item.__ngContext__[14][22];
      if (inputRadio.checked) {
        this.r.setStyle(li, 'color', '#fff');
        if (i !== this.indexPreviousRadio) { // get text for filter
          this.text = item.text
          this.indexPreviousRadio = i;
          console.log(this.text);
        }
      } else {
        this.r.setStyle(li, 'color', '#6b7072');
      }
    })
    this.navbarS.resetToggle();
  }

}
