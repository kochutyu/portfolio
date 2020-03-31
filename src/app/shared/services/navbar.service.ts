import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  paths: string[] = [
    'home',
    'work',
    'about',
    'blog',
    'services',
    'contact',
  ]
  filters: string[] = [
    'All works',
    'corporative',
    'portfolio',
    'lending',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
    'shop',
  ]
  statusOpenFilter: string = 'close';
  toggleFilter(): void{
    this.statusOpenFilter = this.statusOpenFilter === 'open' ? 'close' : 'open';
  }

  constructor() { }
}
