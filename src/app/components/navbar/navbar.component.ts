import { Component, OnInit, ViewChildren, ElementRef, ViewChild, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { FilterListComponent } from './filter-list/filter-list.component';
import { UserWindowService } from 'src/app/shared/services/user-window.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  constructor(
    public windowS:UserWindowService
  ) {
    
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

 
}
