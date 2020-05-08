import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/services/pages/home.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterItem: string[] = [
    'All works',
    'angular',
    'css',
    'html',
    'angular',
    'css',
    'html',
    'html',
    'angular',
    'css',
    'html'
  ];

  activeItem: string = '';
  activeRadio: boolean;
  index: number;

  constructor(
    public filterS: FilterService,
    private router: Router,
    private homeS: HomeService
  ) {
  }

  ngOnInit() {
    
  }

  thisItem(item): void {
    this.filterS.activeItem = item.target.value;
    this.filterS.filter = item.target.value;
    this.activeRadio = true;
    console.log(this.activeItem);
    
    
    if (JSON.parse(localStorage.getItem('auth'))) {
      this.router.navigate(['/admin', 'all-works']);
    } else {
      this.router.navigate(['/home']);
    }
    this.homeS.scale0_5();
    setTimeout(() => {
      this.homeS.scale1();
    }, 500);
  }
  filterWorks(): void { 

  }

}
