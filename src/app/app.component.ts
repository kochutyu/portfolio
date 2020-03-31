import { Component, HostListener, OnInit } from '@angular/core';
import { UserWindowService } from './shared/services/user-window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(
    private windowS: UserWindowService
  ) {
    
  }
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.windowS.width = event.target.innerWidth
    this.windowS.height = event.target.innerHeight;
  }
  ngOnInit(): void {
  }
}
