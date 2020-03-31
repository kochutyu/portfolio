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
  ]

  constructor() { }
}
