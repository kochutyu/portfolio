import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserWindowService {
  width: number;
  height: number;

  constructor() { }
}
