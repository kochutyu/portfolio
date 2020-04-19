import { Component, OnInit, AfterViewInit, QueryList, Renderer2, ViewChildren, Input } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { INavigate } from 'src/app/shared/interface/interfaces';
import { AuthService } from 'src/app/admin/shared/services/auth.service';
import { AuthGuardService } from 'src/app/admin/shared/services/auth-guard.service';

@Component({
  selector: 'app-large-desctop',
  templateUrl: './large-desctop.component.html',
  styleUrls: ['./large-desctop.component.scss']
})
export class LargeDesctopComponent implements OnInit, AfterViewInit {

  @Input() filters: string[];
  @Input() activeNav: INavigate[];

  indexPreviousRadio: number;
  text: string;

  constructor(
    public navbarS: NavbarService,
    private r: Renderer2,
    public windowS: UserWindowService,
    public authS: AuthService,
    public viewer: AuthGuardService
  ) { }

  ngOnInit(): void {
    console.log(this.activeNav);
    
   }

  ngAfterViewInit(): void {
  }

}
