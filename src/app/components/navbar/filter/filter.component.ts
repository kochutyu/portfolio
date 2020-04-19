import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';

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

  constructor(
    public filterS: FilterService
  ) {
  }

  ngOnInit() {
  }

  thisItem(item): void {
    this.activeItem = item.target.value;
    this.filterS.filter = item.target.value;
    this.activeRadio = true;
  }
  filterWorks(): void { 

  }

}
