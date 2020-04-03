import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/shared/services/pages/home.service';
import { UserWindowService } from 'src/app/shared/services/user-window.service';
import { ContactInformationService } from 'src/app/shared/services/pages/contact-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  widthBlock: string;
  heightBlock: string;

  constructor(
    public homeS: HomeService,
    public contactInfoS: ContactInformationService
  ) { }

  ngOnInit(): void {

  }

}
