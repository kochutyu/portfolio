import { Component, OnInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { FilterListComponent } from '../filter-list/filter-list.component';
import { UserWindowService } from 'src/app/shared/services/user-window.service';

@Component({
  selector: 'app-large-desctop',
  templateUrl: './large-desctop.component.html',
  styleUrls: ['./large-desctop.component.scss']
})
export class LargeDesctopComponent implements OnInit {

  paths: string[];
  filters: string[];

  indexPreviousRadio: number;
  text: string;

  @ViewChildren(FilterListComponent) hellos: QueryList<any>;  // list item of filters

  constructor(
    public navbarS: NavbarService,
    private r: Renderer2,
    public windowS:UserWindowService
  ) { }

  ngOnInit(): void {
    this.paths = this.navbarS.paths;
    this.filters = this.navbarS.filters;
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
  }

}
