import { Component, OnInit } from '@angular/core';
import { UserWindowService } from 'src/app/shared/services/user-window.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date: Date = new Date;

  constructor(
    public windowS: UserWindowService
  ) { }

  ngOnInit(): void {
  }

}
